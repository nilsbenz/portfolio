export const languages = {
  de: "Deutsch",
  en: "English",
};

export const defaultLang = "de";

export const ui: Record<keyof typeof languages, Record<string, string>> = {
  de: {
    "nav.home": "Home",
    "nav.projects": "Projekte",
    "nav.about": "Über mich",
    "hero.title": "Hey, ich bin Nils.",
    "hero.dev": "Softwareentwickler",
    "hero.filmmaker": "Filmemacher",
    "hero.description":
      "Ich bin Softwareentwickler und komme aus dem St. Galler Rheintal. Ich fokussiere mich primär auf die Web-Entwicklung, habe aber auch Erfahrung im Backend-Bereich.",
    "home.projects.title": "Meine Projekte",
    "projects.title": "Meine Projekte",
    "about.title": "Über mich",
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About me",
    "hero.title": "Hey, I'm Nils.",
    "hero.dev": "Software Developer",
    "hero.filmmaker": "Filmmaker",
    "hero.description":
      "I'm a software developer from the St. Gallen Rhine Valley. I primarily focus on web development but also have experience in backend development.",
    "home.projects.title": "My Projects",
    "projects.title": "My Projects",
    "about.title": "About me",
  },
} as const;
