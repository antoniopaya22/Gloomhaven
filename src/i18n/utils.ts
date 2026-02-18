import { translations, defaultLang, type Lang } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const [, base, lang] = url.pathname.split('/');
  // base is "Gloomhaven" (from the Astro base config)
  if (lang in translations) return lang as Lang;
  if (base in translations) return base as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function getAlternateUrl(_url: URL, targetLang: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (targetLang === defaultLang) {
    return `${base}/`;
  }
  return `${base}/${targetLang}/`;
}
