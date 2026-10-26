export const contact = {
  github: 'https://github.com/DurnaMa',
  linkedin: 'https://linkedin.com/in/mahir-durna',
};

export const navLinks = [
  { href: '#about', key: 'about' },
  { href: '#skills', key: 'skills' },
  { href: '#projects', key: 'projects' },
  { href: '#contact', key: 'contact' },
] as const;

export const skills = [
  { name: 'HTML', icon: '/svg/HTML.svg' },
  { name: 'CSS', icon: '/svg/CSS.svg' },
  { name: 'JavaScript', icon: '/svg/javaScript.svg' },
  { name: 'TypeScript', icon: '/svg/typeScript.svg' },
  { name: 'Angular', icon: '/svg/Angular.svg' },
  { name: 'Material Design', icon: '/svg/materialDesign.svg' },
  { name: 'Firebase', icon: '/svg/Firebase.svg' },
  { name: 'Git', icon: '/svg/GIT.svg' },
  { name: 'REST API', icon: '/svg/Rest-Api.svg' },
  { name: 'Scrum', icon: '/svg/Scrum.svg' },
  { name: 'Growth Mindset', icon: '/svg/growthMindsetInteraction.svg' },
];

export const learning = ['React', 'Supabase', 'Tailwind CSS'];

export type Project = {
  id: string;
  name: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
};

export const projects: Project[] = [
  {
    id: 'join',
    name: 'Join',
    image: '/img/join.png',
    tags: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
    github: 'https://github.com/DurnaMa/join',
    live: 'https://join.mahir-durna.de/',
  },
  {
    id: 'fantasy-platform',
    name: 'Fantasy Platform',
    image: '/img/fantasyPlatform.png',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/DurnaMa/2dGame',
    live: 'https://2d-game.mahir-durna.de/',
  },
];

export type Reference = { author: string; role: string };

export const references: Reference[] = [
  {
    author: 'H. Alaie',
    role: 'Team Partner',
  },
  {
    author: 'L. Dominique',
    role: 'Team Partner',
  },
];
