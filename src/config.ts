/** Site-wide brand & URL — rename here for a global rebrand. */
export const siteConfig = {
  brand: 'Orb',
  tagline: 'Answer Engine Optimization',
  siteUrl: 'https://orb-aeo.space',
  locale: 'en',
  email: 'hello@orb-aeo.space',
  region: 'Hong Kong',
  description:
    'Orb helps brands get correctly cited in AI answer engines—retrievable, citable, and verifiable.',
} as const;

export const navLinks = [
  { href: '/what-is-aeo', label: 'What is AEO' },
  { href: '/how-we-work', label: 'How we work' },
  { href: '/measurement', label: 'Measurement' },
  { href: '/faq', label: 'FAQ' },
] as const;
