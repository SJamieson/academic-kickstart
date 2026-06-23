// Centralized site identity, navigation, and social links.

export const SITE = {
  title: 'Stewart C. Jamieson',
  /** Used in <title> as "Page — TITLE_SUFFIX" and as the brand wordmark. */
  titleSuffix: 'Stewart Jamieson',
  tagline: 'Building AI that makes safe decisions under uncertainty.',
  description:
    'Stewart C. Jamieson — Head of Technology at Themis AI. Writing on risk-aware, uncertainty-aware AI: technical deep-dives and AI strategy & systems.',
  author: 'Stewart C. Jamieson',
  email: 'sjamieson@alum.mit.edu',
  url: 'https://www.stewartjamieson.com',
  locale: 'en_US',
} as const;

export const NAV: { label: string; href: string }[] = [
  { label: 'Writing', href: '/writing' },
  { label: 'Research', href: '/research' },
  { label: 'Talks', href: '/talks' },
  { label: 'About', href: '/about' },
];

/** Two editorial tracks for the blog. */
export const TRACKS = {
  strategy: { label: 'AI Strategy & Systems', slug: 'strategy' },
  technical: { label: 'Technical Deep-Dives', slug: 'technical' },
} as const;

export type TrackKey = keyof typeof TRACKS;

export const SOCIAL: { label: string; href: string; icon: string }[] = [
  { label: 'Email', href: `mailto:${SITE.email}`, icon: 'email' },
  { label: 'GitHub', href: 'https://github.com/sjamieson', icon: 'github' },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=uOpGWFgAAAAJ',
    icon: 'scholar',
  },
  { label: 'ORCID', href: 'https://orcid.org/0000-0003-4842-0373', icon: 'orcid' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stewart-jamieson/', icon: 'linkedin' },
  {
    label: 'arXiv',
    href: 'https://arxiv.org/a/jamieson_s_1',
    icon: 'arxiv',
  },
];

export const CV_URL = '/files/cv.pdf';
export const THEMIS_URL = 'https://themisai.io';
