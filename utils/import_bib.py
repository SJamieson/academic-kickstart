import sys

from pybtex.database import BibliographyData, parse_file
import oyaml as yaml
import argparse
import pdb
import os
import shutil


def standardize(name):
    tokens = str(name).split(',')
    if len(tokens) > 1:
        assert len(tokens) == 2
        return ' '.join(tokens[::-1]).strip()
    return str(name).strip()


def clean(token):
    token = str(token)
    token = token.replace('{', '')
    token = token.replace('}', '')
    return token


def is_same_person(name1, name2):
    if name1 is None or name2 is None:
        return False
    name1 = standardize(name1)
    name2 = standardize(name2)
    return name1 == name2

def format_first(firstname):
    tokens = firstname.strip().split(' ') if isinstance(firstname, str) else firstname
    return ' '.join([token.strip()[0] + '.' for token in tokens])

def to_citation(name):
    namestr = str(name)
    if ',' in namestr:
        tokens = namestr.split(',')
        return tokens[0].strip() + ", " + format_first(tokens[1])
    tokens = namestr.split(' ')
    if len(tokens) > 2:
        print(f'Warning: unsure how to format name "{name}"', file=sys.stderr)
    return tokens[-1].strip() + ", " + format_first(tokens[:-1])


def save_to(file, static_dir, subfolder='', new_name=None, preserve_ext=True):
    if file is None or static_dir is None:
        return None
    dir = os.path.join(static_dir, subfolder)
    os.makedirs(dir, exist_ok=True)
    if new_name is None:
        new_name = os.path.basename(file)
    elif preserve_ext:
        new_name = new_name + os.path.splitext(file)[1]
    out = os.path.join(dir, new_name)
    shutil.copy(file, out, follow_symlinks=True)
    return os.path.join(subfolder, new_name)


def get_url_pdf(entry, static_dir):
    url = None
    if 'url' in entry.fields:
        url = str(entry.fields['url'])
        if url.lower().endswith('.pdf'):
            return url, url
        if 'arxiv.org' in url and '/abs/' in url:
            return url, url.replace('/abs/', '/pdf/') + '.pdf'
    files = entry.fields['file'].split(';') if 'file' in entry.fields else []
    for file in files:
        filestr = str(file)
        if filestr.lower().endswith('.pdf'):
            pdf = save_to(filestr, static_dir, 'pdfs', entry.key, preserve_ext=True)
            if url is None:
                url = pdf
            return url, pdf
    return url, None


def get_image(entry):
    files = entry.fields['file'].split(';') if 'file' in entry.fields else []
    for file in files:
        filestr = str(file)
        if filestr.lower().endswith('.jpg') or filestr.lower().endswith('.png'):
            return save_to(str(file), args.static, 'images', entry.key, preserve_ext=True)
    return None


def get_links(entry):
    links = []
    entries = entry.fields['keywords'].split(',') if 'keywords' in entry.fields else []
    entries.extend(entry.fields['annotation'].split(',') if 'annotation' in entry.fields else [])
    if 'url' in entry.fields and get_url_pdf(entry, None)[1] is None:
        entries.append(f"Link: {entry.fields['url']}")
    for kw in entries:
        kwstr = str(kw).lower()
        if 'https://' not in kwstr and 'http://' not in kwstr and 'www.' not in kwstr:
            continue
        if ':' not in kwstr:
            raise RuntimeError(f'Unsure how to parse link {kwstr}')
        idx = kwstr.find(':')
        tokens = str(kw)[:idx].strip(), str(kw)[idx+1:].strip()
        links.append({
            "name": tokens[0].capitalize(),
            "url": tokens[1]
        })
    return links

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Creates a markdown representation of a list of publications')
    parser.add_argument('database', type=str, help='Path to the Bib(La)Tex publication database')
    parser.add_argument('--name', type=str, default=None, help='Name of the database owner')
    parser.add_argument('--static', type=str, default=None, help='Directory to store static files')
    args = parser.parse_args()

    drop_fields = ['file', 'annotation', 'keywords', 'abstract']

    db = parse_file(args.database)
    publications = []
    talks = []
    for key in db.entries:
        entry = db.entries[key]
        pub = {
            "authors": [{"name": to_citation(name), "me": is_same_person(name, args.name)} for set in entry.persons for name in entry.persons[set]],
            "title": clean(entry.fields['title']),
            "date": entry.fields['date'] if 'date' in entry.fields else entry.fields['year']
        }
        # if len(pub['authors']) > 5:
        #     pub['authors'] = pub['authors'][:4]
        #     pub['authors'].append({
        #         'name': 'et al.'
        #     })
        if 'abstract' in entry.fields:
            pub['description'] = clean(entry.fields['abstract'])
            if len(pub['description']) > 250:
                pub['description'] = pub['description'][:247].strip() + '...'
        url_link, pdf_link = get_url_pdf(entry, args.static)
        image = get_image(entry)
        links = get_links(entry)
        if url_link is not None:
            pub['pdf'] = url_link
        elif pdf_link is not None:
            pub['pdf'] = pdf_link
        elif len(links) > 0:
            for link in links:
                if link['name'] in ['PDF', 'Link']:
                    pub['pdf'] = link['url']
                    break
            else:
                pub['pdf'] = links[0]['url']
        if pdf_link is not None:
            links.insert(0, {
                'name': 'PDF',
                'url': pdf_link
            })
        if image is not None:
            pub['image'] = image
        if len(links) > 0:
            pub['links'] = links
        for dropfield in drop_fields:
            if dropfield in entry.fields:
                entry.fields.pop(dropfield)
        pub['citation'] = BibliographyData({key: entry}).to_string('bibtex')
        if entry.original_type in ['inproceedings', 'journal']:
            pub['journal'] = clean(entry.fields['booktitle'] if 'booktitle' in entry.fields else entry.fields['institution'])
            publications.append(pub)
        elif entry.original_type not in ['thesis']:
            pub['event'] = clean(entry.fields['eventtitle'] if 'eventtitle' in entry.fields else entry.fields['type'] if 'type' in entry.fields else entry.fields['number'])
            talks.append(pub)
    publications = sorted(publications, key = lambda x: x['date'])[::-1]
    talks = sorted(talks, key = lambda x: x['date'])[::-1]
    # pdb.set_trace()
    print(yaml.dump({
        'publications': publications,
        'talks': talks,
    }, ))
