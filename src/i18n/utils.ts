import { defaultLang, ui } from "./ui";

export function getLang(currentLocale: string | undefined, url: URL) {
  if (currentLocale && currentLocale in ui) {
    return currentLocale as keyof typeof ui;
  }
  const [, lang] = url.pathname.split("/");
  if (lang in ui) {
    return lang as keyof typeof ui;
  }
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}
