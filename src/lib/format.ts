// Shared formatting helpers for publications and talks.

export interface Author {
  name: string;
  isSelf: boolean;
}

/** Split an author into display form, flagging the site owner for bolding. */
export function formatAuthors(authors: string[]): Author[] {
  return authors.map((name) => ({ name, isSelf: /jamieson/i.test(name) }));
}

const LINK_ORDER = ['pdf', 'arxiv', 'doi', 'code', 'video', 'slides', 'poster', 'url'] as const;
const LINK_LABELS: Record<string, string> = {
  pdf: 'PDF',
  arxiv: 'arXiv',
  doi: 'DOI',
  code: 'Code',
  video: 'Video',
  slides: 'Slides',
  poster: 'Poster',
  url: 'Link',
};

export interface DisplayLink {
  key: string;
  label: string;
  href: string;
}

/** Ordered, labeled links from a `links` frontmatter object. */
export function displayLinks(links?: Record<string, string | undefined>): DisplayLink[] {
  if (!links) return [];
  return LINK_ORDER.filter((k) => links[k]).map((k) => ({
    key: k,
    label: LINK_LABELS[k],
    href: links[k] as string,
  }));
}

export const PUB_TYPE_ORDER = ['journal', 'conference', 'workshop', 'thesis'] as const;
export const PUB_TYPE_HEADINGS: Record<string, string> = {
  journal: 'Journal Articles',
  conference: 'Conference Papers',
  workshop: 'Workshop Papers',
  thesis: 'Theses',
};

export const TALK_CATEGORY_ORDER = ['selected', 'industry', 'poster'] as const;
export const TALK_CATEGORY_HEADINGS: Record<string, string> = {
  selected: 'Invited & Selected Talks',
  industry: 'Industry & Public Outreach',
  poster: 'Posters & Other Presentations',
};

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/** "May 2023" */
export function formatMonthYear(date: Date): string {
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}
