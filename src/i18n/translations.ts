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
    switchLanguage: 'Sprache wechseln',
  },
  hero: {
    subtitle: 'Frontend-Entwickler',
    intro:
      'Vom IT-Administrator zum Entwickler: Ich baue moderne, nutzerorientierte Webanwendungen mit Angular und TypeScript.',
    buttonProjects: 'Projekte ansehen',
    buttonContact: 'Kontakt aufnehmen',
    scroll: 'Nach unten scrollen',
    email: 'E-Mail',
  },
  about: {
    heading: 'Über mich',
    text: 'Hey, ich bin Mahir! Wer aus der IT-Administration kommt, weiß, wie wichtig funktionierende Systeme sind. Nach Jahren in der Telematikinfrastruktur wollte ich aber die Seiten wechseln: Weg vom reinen Verwalten, hin zum eigentlichen Bauen. Genau deshalb entwickle ich heute moderne Webanwendungen mit Angular. Mich begeistert es einfach, wenn aus komplexer Logik am Ende eine App wird, die echten Nutzen bringt.',
    location: 'Standort: Molbergen',
    approach:
      'Mit über 12 Projekten in Angular, TypeScript und Supabase im Gepäck bringe ich mein Admin-Mindset in den Code: Fehler schnell isolieren, komplexe Logik ausdauernd lösen und effiziente Ergebnisse liefern. Ich schätze den kreativen Austausch via Scrum und sehe lebenslanges Lernen als Lebenseinstellung.',
  },
  skills: {
    heading: 'Skills',
    text: 'Mein Fokus liegt auf modernen Frontend-Technologien rund um Angular und TypeScript. Aus der Administration bringe ich ein solides Verständnis für Systeme, Netzwerke und sauberes Troubleshooting mit.',
    stackQuestion: 'Neue Tools lerne ich schnell. Fragen zu meinem Tech-Stack?',
    callToAction: 'Schreib mir.',
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
      'Die Zusammenarbeit mit Mahir war durchweg positiv.Er ist teamorientiert, hilfsbereit und bringt sich aktiv ein. Besonders schätze ich seine ruhige Art, mit der er auch in anspruchsvollen Situationen den Überblick behält, sowie seinen Fokus auf gut strukturierten, verständlichen Code.',
      'Mit Dominique habe ich sehr gern zusammengearbeitet. Er ist teamorientiert, hilfsbereit und engagiert sich aktiv im Projekt. Ich schätze besonders, dass er auch unter Druck ruhig und strukturiert bleibt und Code schreibt, der klar aufgebaut und leicht verständlich ist.',
    ],
  },
  contact: {
    heading: 'Kontakt',
    title: 'Lass uns',
    titleAccent: 'vernetzen.',
    description:
      'Fragen zu meinen Projekten, Feedback oder einfach Lust auf einen Austausch über Webentwicklung? Schreib mir – ich freue mich über deine Nachricht.',
  },
  form: {
    nameLabel: 'Wie heißt du?',
    namePlaceholder: 'Dein Name',
    emailLabel: 'Deine E-Mail-Adresse?',
    emailPlaceholder: 'deine@email.de',
    messageLabel: 'Wie kann ich helfen?',
    messagePlaceholder: 'Hallo Mahir, ich interessiere mich für…',
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
    errorMessage: 'Bitte gib eine Nachricht ein.',
    errorRateLimit:
      'Du hast gerade mehrere Nachrichten gesendet. Bitte versuche es später erneut oder schreib mir direkt eine E-Mail.',
  },
  footer: {
    legal: 'Impressum',
    privacy: 'Datenschutz',
  },
  impressum: {
    title: 'Impressum',
    legalBasis: 'Angaben gemäß § 5 DDG',
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
    switchLanguage: 'Switch language',
  },
  hero: {
    subtitle: 'Frontend Developer',
    intro:
      'From IT administrator to developer: I build modern, user-centric web applications with Angular and TypeScript.',
    buttonProjects: 'Check my work',
    buttonContact: 'Contact me',
    scroll: 'Scroll down',
    email: 'Email',
  },
  about: {
    heading: 'About me',
    text: "Hey, I'm Mahir! Anyone coming from IT administration knows how important working systems are. After years in telematics infrastructure, though, I wanted to switch sides: away from just managing, towards actually building. That's exactly why I now develop modern web applications with Angular. I simply love it when complex logic turns into an app that delivers real value.",
    location: 'Location: Molbergen, Germany',
    approach:
      'With more than 12 projects in Angular, TypeScript and Supabase under my belt, I bring my admin mindset into the code: isolating bugs quickly, solving complex logic with persistence and delivering efficient results. I value creative collaboration through Scrum and see lifelong learning as a way of life.',
  },
  skills: {
    heading: 'Skills',
    text: 'My focus is on modern frontend technologies around Angular and TypeScript. From my years in administration, I bring a solid understanding of systems, networks and clean troubleshooting.',
    stackQuestion: 'I pick up new tools fast. Questions about my stack?',
    callToAction: 'Get in touch.',
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
      'Working with Mahir has been a thoroughly positive experience. He is a team player, helpful, and actively contributes to the project. I particularly appreciate his calm demeanor, which allows him to maintain a clear perspective even in challenging situations, as well as his focus on well-structured, easy-to-understand code.',
      'I really enjoyed working with Dominique. He is a team player, helpful, and actively involved in the project. I especially appreciate that he remains calm and organized even under pressure and writes code that is clearly structured and easy to understand.',
    ],
  },
  contact: {
    heading: 'Contact',
    title: "Let's",
    titleAccent: 'connect.',
    description:
      "Questions about my projects, feedback or just up for a chat about web development? Drop me a message – I'm happy to hear from you.",
  },
  form: {
    nameLabel: "What's your name?",
    namePlaceholder: 'Your name goes here',
    emailLabel: "What's your email?",
    emailPlaceholder: 'youremail@email.com',
    messageLabel: 'How can I help you?',
    messagePlaceholder: 'Hello Mahir, I am interested in…',
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
    errorMessage: 'Please enter a message.',
    errorRateLimit: "You've sent several messages recently. Please try again later or send me an email directly.",
  },
  footer: {
    legal: 'Legal Notice',
    privacy: 'Privacy Policy',
  },
  impressum: {
    title: 'Legal Notice',
    legalBasis: 'Information according to § 5 DDG (German Digital Services Act)',
    contact: 'Contact',
    phone: 'Phone:',
    email: 'Email:',
    source: 'Source:',
  },
};

export type Language = 'de' | 'en';

export const translations: Record<Language, Translation> = { de, en };
