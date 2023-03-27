import type { DropMenu } from '../components/Dropdown';
import type { LocaleSetting, LocaleType } from '/#/config';

export const LOCALE: { [key: string]: LocaleType } = {
  EN_US: 'en',
  KO_KR: 'ko',
};

export const localeSetting: LocaleSetting = {
  showPicker: true,
  // Locale
  locale: LOCALE.KO_KR,
  // Default locale
  fallback: LOCALE.KO_KR,
  // available Locales
  availableLocales: [LOCALE.EN_US, LOCALE.KO_KR],
};

// locale list
export const localeList: DropMenu[] = [
  {
    text: 'English',
    event: LOCALE.EN_US,
  },
  {
    text: '한국어',
    event: LOCALE.KO_KR,
  },
];
