import type { WorkExperience } from '../types/resume';

export const WORK_EXP: WorkExperience[] = [
  {
    company: 'Raintonic',
    location: 'location.padua',
    title: 'title.fullstack',
    description: 'work.rt.desc',
    dates: '2022 - present',
    tags: ['angular', 'react', 'nestjs', 'node']
  },
  {
    company: 'Cortek',
    location: 'location.perugia',
    title: 'title.fullstack',
    description: 'work.cortek.desc',
    dates: '2020 - 2022',
    tags: ['node', 'nextjs', 'react', 'nosql']
  },
  {
    company: 'Brunello Cucinelli',
    location: 'location.solomeo',
    title: 'title.boutique',
    description: 'work.bc.desc',
    dates: '2017 - 2020',
    tags: ['sales', 'pr', 'management', 'vm']
  }
];
