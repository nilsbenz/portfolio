export const languages = {
  de: "Deutsch",
  en: "English",
};

export const defaultLang = "de" satisfies keyof typeof languages;

export const ui: Record<keyof typeof languages, Record<string, string>> = {
  de: {
    "meta.description":
      "Hey, ich bin Nils, komme aus dem St. Galler Rheintal und bin Softwareentwickler und Filmemacher.",
    "nav.home": "Home",
    "nav.projects": "Projekte",
    "nav.about": "Über mich",
    "hero.title": "Hey, ich bin Nils.",
    "hero.dev": "Softwareentwickler",
    "hero.filmmaker": "Filmemacher",
    "hero.description":
      "Ich bin Softwareentwickler und komme aus dem St. Galler Rheintal. Ich fokussiere mich primär auf die Web-Entwicklung, habe aber auch Erfahrung im Backend-Bereich.",
    "home.projects.title": "Meine Projekte",
    "home.projects.viewAll": "Alle Projekte",
    "home.films.title": "Meine Videos",
    "projects.title": "Meine Projekte",
    "about.title": "Über mich",
    "about.description":
      "Hey 👋 ich bin Nils, ein Softwareentwickler aus dem St. Galler Rheintal. Ich wage mich gerne an neue Herausforderungen und möchte mit meinen Projekten einen echten Mehrwert schaffen.",
    "about.bio": `Seit 2021 studiere ich Informatik an der ETH Zürich. Nebenbei arbeite ich als Web-Entwickler bei Ubique und realisiere diverse eigene Projekte. Dazu gehören unter anderem Webseiten und Werbevideos für Unternehmen sowie Hochzeitsvideos.
In meiner Freizeit spiele ich Schlagzeug beim Musikverein Diepoldsau-Schmitter und wirke dort im Marketing und an verschiedenen Anlässen mit. Ausserdem bin ich leidenschaftlicher Kite-Surfer und auch sonst gerne in der Natur unterwegs.`,
    "about.experience": "Ausbildung & Erfahrung",
    "about.adcubum.period": "August 2018 - August 2021",
    "about.adcubum.position":
      "Lernender Informatik EFZ, anschl. Web-Entwickler (Teilzeit)",
    "about.adcubum.description":
      "Way-Up Lehre Applikationsentwicklung von 2018 bis 2020, anschliessend verantwortlich für die Entwicklung und Unterhaltung eines internen Testing-Tools für GRPC-Services.",
    "about.selfemployed.company": "Selbstständig",
    "about.selfemployed.period": "August 2020 - Heute",
    "about.selfemployed.position": "Softwareentwickler & Filmemacher",
    "about.selfemployed.description":
      "Verschiedene Web-Projekte und Filmproduktionen. Für mehr Infos siehe Projekte.",
    "about.ethz.company": "ETH Zürich",
    "about.ethz.period": "September 2021 - Heute",
    "about.ethz.position": "MSc in Computer Science (angehend)",
    "about.ethz.description":
      "Bachelor in Informatik von 2021 bis 2024. Master in Informatik seit 2024.",
    "about.ubique.period": "Juli 2023 - Heute",
    "about.ubique.position": "Web-Entwickler (Teilzeit)",
    "about.ubique.description":
      "Als Mitglied des Web-Teams bin ich an der Entwicklung von Projekten wie den ZVV Abfahrtsmonitoren und dem Heidi Universe beteiligt.",
    "about.contact": "Kontakt",
    "about.contact.description":
      'Hast du ein spannendes Projekt oder möchtest einfach Hallo sagen? Schreib mir eine E-Mail an <a href="mailto:{email}">{email}</a>!',
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
    "home.projects.viewAll": "All Projects",
    "home.films.title": "My Films",
    "projects.title": "My Projects",
    "about.title": "About me",
    "about.description":
      "Hey 👋 I'm Nils, a software engineer from the eastern part of Switzerland. I enjoy taking on new challenges and want my projects to have a real impact.",
    "about.bio": `Since 2021, I have been studying Computer Science at ETH Zurich. In parallel, I work as a web developer at Ubique and realize various personal projects. These include websites and promotional videos for companies, as well as wedding videos.
In my free time, I play the drums in my hometown orchestra and am involved in the marketing and various events there. I am also a passionate kite surfer and enjoy spending time in nature.`,
    "about.experience": "Education & Experience",
    "about.adcubum.period": "August 2018 - August 2021",
    "about.adcubum.position":
      "Apprentice in computer science EFZ, then web developer (part-time)",
    "about.adcubum.description":
      "Way-Up apprenticeship in application development from 2018 to 2020, then responsible for the development and maintenance of an internal testing tool for gRPC services.",
    "about.selfemployed.company": "Self-employed",
    "about.selfemployed.period": "August 2020 - today",
    "about.selfemployed.position": "Software Developer & Filmmaker",
    "about.selfemployed.description":
      "Various web projects and film productions. For more info see projects.",
    "about.ethz.company": "ETH Zurich",
    "about.ethz.period": "September 2021 - today",
    "about.ethz.position": "MSc in Computer Science (ongoing)",
    "about.ethz.description":
      "Bachelor in Computer Science from 2021 to 2024. Master in Computer Science since 2024.",
    "about.ubique.period": "July 2023 - today",
    "about.ubique.position": "Web Developer (part-time)",
    "about.ubique.description":
      "As a member of the web team, I am involved in the development of projects such as the ZVV departure monitors and the Heidi Universe.",
    "about.contact": "Contact",
    "about.contact.description":
      'If you have an exciting project or just want to say hello, feel free to email me at <a href="mailto:{email}">{email}</a>!',
  },
} as const;
