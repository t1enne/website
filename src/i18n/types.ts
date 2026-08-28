import type { SkillCategory } from "../data/skills";

export interface WorkExperienceI18n {
  company: string;
  location: string;
  title: string;
  description: string;
  dates: string;
  tags: string[];
}

export interface EducationI18n {
  location: string;
  title: string;
  dates: string;
  score?: string;
}

export interface CourseI18n {
  provider: string;
  title: string;
  dates: string;
  summary?: string;
}

export interface Project {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  /** Category shown on the portfolio page. */
  category?: string;
  /** Short highlights/outcomes shown on the portfolio page. */
  highlights?: string[];
  url?: string;
  /** True when the project is not public / open source. */
  closedSource?: boolean;
  /** When true, the project also appears in the resume's Projects section. */
  showOnResume?: boolean;
}

export interface LanguageI18n {
  name: string;
  level: string;
}

/* ---- Services page ---- */

export interface ServiceI18n {
  icon: string; // lucide icon key
  title: string;
  description: string;
  features: string[];
}

export interface ServiceLabels {
  pageTitle: string;
  intro: string;
  title: string;
  deliverablesLabel: string;
  cta: string;
  ctaHref: string;
  processTitle: string;
  process: { title: string; description: string }[];
}

export interface ServicesI18n {
  labels: ServiceLabels;
  services: ServiceI18n[];
}

/* ---- Portfolio page ---- */

export interface PortfolioLabels {
  pageTitle: string;
  intro: string;
  title: string;
  projectCount: string;
  cta: string;
  ctaHref: string;
}

export interface PortfolioI18n {
  labels: PortfolioLabels;
  projects: Project[];
}

/* ---- Navigation ---- */

export interface NavLabels {
  resume: string;
  services: string;
  portfolio: string;
}

export interface ResumeLabels {
  aboutTitle: string;
  aboutContent: string;
  workTitle: string;
  educationTitle: string;
  educationScore: string;
  coursesTitle: string;
  projectsTitle: string;
  skillsTitle: string;
  langsTitle: string;
  citizenship: string;
  citizenshipLabel: string;
  contactLocation: string;
  contactEmail: string;
  contactLinkedin: string;
  contactGithub: string;
  location: string;
}

export interface ResumeI18n {
  labels: ResumeLabels;
  workExperience: WorkExperienceI18n[];
  education: EducationI18n[];
  courses: CourseI18n[];
  projects: Project[];
  languages: LanguageI18n[];
  skills: SkillCategory[];
  allSkills: string[];
}
