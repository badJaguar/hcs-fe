export type TabValue = '/' | '/seo' | '/digital' | '/contact-us' | '/sevices';

export const PAGES_WEB = [
  {
    label: 'Home',
    value: '/',
  },
  {
    label: 'SEO & Digital',
    value: '/digital',
  },
  {
    label: 'Services & Packages',
    value: '/services',
  },
  {
    label: 'Contact Us',
    value: '/contact-us',
  }] as const;

export const CALL_BACK = 'Call Us' as const;
