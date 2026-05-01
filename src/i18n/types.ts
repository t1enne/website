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
}

export interface ProjectI18n {
  title: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface LanguageI18n {
  name: string;
  level: string;
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
  contactPhone: string;
  contactLinkedin: string;
  contactGithub: string;
  location: string;
}

export interface ResumeI18n {
  labels: ResumeLabels;
  workExperience: WorkExperienceI18n[];
  education: EducationI18n[];
  courses: CourseI18n[];
  projects: ProjectI18n[];
  languages: LanguageI18n[];
  skills: SkillCategory[];
  allSkills: string[];
}
