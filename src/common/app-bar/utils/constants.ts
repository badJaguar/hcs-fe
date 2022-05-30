export type TabValue = '/' | '/seo' | '/digital' | '/contact-us' | '/credit-history';

export const PAGES_WEB = [
  {
    label: 'Home',
    value: '/',
  },
  // {
  //   label: 'SEO',
  //   value: '/seo',
  // },
  {
    label: 'SEO & Digital',
    value: '/digital',
  },
  // {
  //   label: 'Credit History',
  //   value: '/credit-history',
  // },
  {
    label: 'Contact Us',
    value: '/contact-us',
  }] as const;

export const CALL_BACK = 'Call Back' as const;
