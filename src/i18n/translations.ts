const de = {
  meta: {
    title: 'Mahir Durna – Frontend-Entwickler',
    description:
      'Mahir Durna – Frontend-Entwickler aus Molbergen. Moderne Webanwendungen mit Angular, TypeScript und React.',
  },
  nav: {
    about: 'Über mich',
    skills: 'Skills',
    projects: 'Projekte',
    contact: 'Kontakt',
    openMenu: 'Menü öffnen',
    switchLang: 'Sprache wechseln',
  },
  hero: {
    subtitle: 'Frontend-Entwickler',
    intro:
      'Vom IT-Administrator zum Entwickler: Ich baue moderne, nutzerorientierte Webanwendungen mit Angular und TypeScript.',
    btnWork: 'Projekte ansehen',
    btnContact: 'Kontakt aufnehmen',
    scroll: 'Nach unten scrollen',
    email: 'E-Mail',
  },
  about: {
    heading: 'Über mich',
    text: 'Hey, ich bin Mahir! Wer aus der IT-Administration kommt, weiß, wie wichtig funktionierende Systeme sind. Nach Jahren in der Telematikinfrastruktur wollte ich aber die Seiten wechseln: Weg vom reinen Verwalten, hin zum eigentlichen Bauen. Genau deshalb entwickle ich heute moderne Webanwendungen mit Angular. Mich begeistert es einfach, wenn aus komplexer Logik am Ende eine App wird, die echten Nutzen bringt.',
    location: 'Standort: Molbergen',
    workMode: 'Arbeitsmodell: Remote / flexible Zusammenarbeit',
    approach:
      'Mit über 12 Projekten in Angular, TypeScript und Supabase im Gepäck bringe ich mein Admin-Mindset in den Code: Fehler schnell isolieren, komplexe Logik ausdauernd lösen und effiziente Ergebnisse liefern. Ich schätze den kreativen Austausch via Scrum und sehe lebenslanges Lernen als Lebenseinstellung.',
  },
  skills: {
    heading: 'Skills',
    text: 'Mein Fokus liegt auf modernen Frontend-Technologien rund um Angular und TypeScript. Aus der Administration bringe ich ein solides Verständnis für Systeme, Netzwerke und sauberes Troubleshooting mit.',
    needSkill: 'Du brauchst eine andere Fähigkeit?',
    cta: 'Lass uns sprechen.',
  },
  projects: {
    heading: 'Projekte',
    label: 'Projekt',
    screenshot: 'Screenshot von',
    live: 'Live-Demo',
    descriptions: {
      join: 'Ein Kanban-basiertes Projektmanagement-Tool, mit dem Teams Aufgaben per Drag-and-Drop organisieren, Personen zuweisen und Änderungen in Echtzeit verfolgen.',
      'fantasy-platform':
        'Ein klassisches Jump-and-Run-Browsergame mit Gegnern, Sammelobjekten und mehreren Leveln – komplett mit Vanilla JavaScript und OOP umgesetzt.',
    } as Record<string, string>,
  },
  references: {
    heading: 'Was andere sagen',
    items: [
      'Ich war stets beeindruckt von Mahirs effizienter Arbeitsweise und seinem Einsatz für den Projekterfolg.',
      'Mahir hat sich als zuverlässiger Teampartner erwiesen. Seine technischen Fähigkeiten und seine proaktive Art waren entscheidend für den Erfolg unseres Projekts.',
      'Ich hatte das große Glück, mit Mahir an einem Projekt in der Developer Akademie zu arbeiten. Er blieb immer ruhig und konzentriert, um den Erfolg unseres Teams sicherzustellen.',
    ],
  },
  contact: {
    heading: 'Kontakt',
    title: 'Lass uns',
    titleAccent: 'zusammenarbeiten.',
    desc: 'Du suchst einen Frontend-Entwickler, der komplexe Probleme strukturiert angeht und Systeme von Grund auf versteht? Ich freue mich über spannende Projekte, Festanstellungen und Remote-Zusammenarbeit.',
  },
  form: {
    nameLabel: 'Wie heißt du?',
    namePh: 'Dein Name',
    emailLabel: 'Deine E-Mail-Adresse?',
    emailPh: 'deine@email.de',
    msgLabel: 'Wie kann ich helfen?',
    msgPh: 'Hallo Mahir, ich interessiere mich für…',
    privacyBefore: 'Ich habe die',
    privacyLink: 'Datenschutzerklärung',
    privacyAfter: 'gelesen und stimme der Verarbeitung meiner Daten zu.',
    submit: 'Nachricht senden',
    sending: 'Wird gesendet…',
    success: '✓ Nachricht gesendet! Ich melde mich in Kürze.',
    errorServer: 'Es ist ein Fehler aufgetreten. Bitte versuche es erneut oder schreib mir direkt eine E-Mail.',
    errorName: 'Bitte gib deinen Namen an.',
    errorEmailEmpty: 'Bitte gib deine E-Mail-Adresse an.',
    errorEmailInvalid: 'Bitte gib eine gültige E-Mail-Adresse an.',
    errorMsg: 'Bitte gib eine Nachricht ein.',
  },
  footer: {
    legal: 'Impressum',
    privacy: 'Datenschutz',
  },
  impressum: {
    title: 'Impressum',
    sub: 'Angaben gemäß § 5 DDG',
    contact: 'Kontakt',
    phone: 'Telefon:',
    email: 'E-Mail:',
    source: 'Quelle:',
  },
};

export type Translation = typeof de;

const en: Translation = {
  meta: {
    title: 'Mahir Durna – Frontend Developer',
    description:
      'Mahir Durna – Frontend developer from Molbergen, Germany. Modern web applications with Angular, TypeScript and React.',
  },
  nav: {
    about: 'About me',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    openMenu: 'Open menu',
    switchLang: 'Switch language',
  },
  hero: {
    subtitle: 'Frontend Developer',
    intro:
      'From IT administrator to developer: I build modern, user-centric web applications with Angular and TypeScript.',
    btnWork: 'Check my work',
    btnContact: 'Contact me',
    scroll: 'Scroll down',
    email: 'Email',
  },
  about: {
    heading: 'About me',
    text: "Hey, I'm Mahir! Anyone coming from IT administration knows how important working systems are. After years in telematics infrastructure, though, I wanted to switch sides: away from just managing, towards actually building. That's exactly why I now develop modern web applications with Angular. I simply love it when complex logic turns into an app that delivers real value.",
    location: 'Location: Molbergen, Germany',
    workMode: 'Work mode: Remote / flexible collaboration',
    approach:
      'With more than 12 projects in Angular, TypeScript and Supabase under my belt, I bring my admin mindset into the code: isolating bugs quickly, solving complex logic with persistence and delivering efficient results. I value creative collaboration through Scrum and see lifelong learning as a way of life.',
  },
  skills: {
    heading: 'Skills',
    text: 'My focus is on modern frontend technologies around Angular and TypeScript. From my years in administration, I bring a solid understanding of systems, networks and clean troubleshooting.',
    needSkill: 'You need another skill?',
    cta: "Let's talk.",
  },
  projects: {
    heading: 'Projects',
    label: 'Project',
    screenshot: 'Screenshot of',
    live: 'Live demo',
    descriptions: {
      join: 'A Kanban-based project management tool that helps teams organize tasks with drag-and-drop boards, user assignments and real-time updates.',
      'fantasy-platform':
        'A classic jump-and-run browser game with enemies, collectibles and multiple levels – built entirely with vanilla JavaScript and OOP.',
    },
  },
  references: {
    heading: 'What colleagues say',
    items: [
      "I was continuously impressed by Mahir's efficient way of working and his dedication to the project's success.",
      'Mahir has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
      'I had the good fortune of working with Mahir on a project at the Developer Akademie. He always stayed calm, cool, and collected to make sure our team was set up for success.',
    ],
  },
  contact: {
    heading: 'Contact',
    title: "Let's work",
    titleAccent: 'together.',
    desc: "Looking for a frontend developer who tackles complex problems in a structured way and understands systems from the ground up? I'm happy to hear about exciting projects, permanent positions and remote collaboration.",
  },
  form: {
    nameLabel: "What's your name?",
    namePh: 'Your name goes here',
    emailLabel: "What's your email?",
    emailPh: 'youremail@email.com',
    msgLabel: 'How can I help you?',
    msgPh: 'Hello Mahir, I am interested in…',
    privacyBefore: "I've read the",
    privacyLink: 'privacy policy',
    privacyAfter: 'and agree to the processing of my data as outlined.',
    submit: 'Send message',
    sending: 'Sending…',
    success: "✓ Message sent! I'll get back to you soon.",
    errorServer: 'Something went wrong. Please try again or send me an email directly.',
    errorName: 'Please enter your name.',
    errorEmailEmpty: 'Please enter your email address.',
    errorEmailInvalid: 'Please enter a valid email address.',
    errorMsg: 'Please enter a message.',
  },
  footer: {
    legal: 'Legal Notice',
    privacy: 'Privacy Policy',
  },
  impressum: {
    title: 'Legal Notice',
    sub: 'Information according to § 5 DDG (German Digital Services Act)',
    contact: 'Contact',
    phone: 'Phone:',
    email: 'Email:',
    source: 'Source:',
  },
};

export type Lang = 'de' | 'en';

export const translations: Record<Lang, Translation> = { de, en };
