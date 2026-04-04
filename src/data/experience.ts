import type { WorkExperience } from '../types/resume';

export const WORK_EXP: WorkExperience[] = [
  {
    company: 'Raintonic',
    location: 'location.padua',
    title: 'title.fullstack',
    description: 'work.rt.desc',
    dates: 'Mar 2022 – Present',
    tags: ['Angular', 'React', 'NestJS', 'Node.js', 'Docker', 'Jenkins', 'CI/CD']
  },
  {
    company: 'Cortek',
    location: 'location.perugia',
    title: 'title.fullstack',
    description: 'work.cortek.desc',
    dates: 'Jan 2020 – Feb 2022',
    tags: ['Node.js', 'Next.js', 'React', 'PostgreSQL', 'MongoDB', 'AWS']
  },
  {
    company: 'Brunello Cucinelli',
    location: 'location.solomeo',
    title: 'title.boutique',
    description: 'work.bc.desc',
    dates: 'Mar 2017 – Dec 2019',
    tags: ['AS400', 'Salesforce', 'Retail Operations', 'CRM']
  }
];
