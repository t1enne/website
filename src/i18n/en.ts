import type { ResumeI18n } from "./types";
import { SKILLS, ALL_SKILLS } from "../data/skills";

const en: ResumeI18n = {
  labels: {
    aboutTitle: "Professional Summary",
    aboutContent:
      "Full-stack developer with 5+ years of enterprise experience in banking and government sectors. Built a custom UI framework deployed to 600,000+ devices. Expert in React, Angular, Node.js (NestJS), PostgreSQL, Docker, and CI/CD pipelines. Fluent in English, Italian, Russian, and French.",
    workTitle: "Work Experience",
    educationTitle: "Education",
    educationScore: "Score",
    coursesTitle: "Courses & Certifications",
    projectsTitle: "Projects",
    skillsTitle: "Technical Skills",
    langsTitle: "Languages",
    citizenship: "Italian",
    citizenshipLabel: "Citizenship",
    contactLocation: "Location",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactLinkedin: "LinkedIn",
    contactGithub: "Github",
    location: "Padua, Italy",
  },
  workExperience: [
    {
      company: "Raintonic",
      location: "Padua, Italy",
      title: "Full Stack Developer",
      description: `- Led frontend development of ATM software for a leading Italian bank, deployed across Europe using Angular, React, and NestJS
- Designed micro-frontend architecture serving 600+ ATMs, reducing load time by 25%
- Served as primary technical liaison with client's project manager, facilitating clear communication between business and engineering teams
- Managed and mentored teams of 1-4 developers through full SDLC including requirements, sprint planning, and delivery
- Reduced CI pipeline time by 40% through build process optimization and containerization
- Containerized applications using Docker and set up on-premise Jenkins CI/CD pipelines
- Reduced production incidents by 30% through comprehensive testing and code review processes`,
      dates: "Mar 2022 – Present",
      tags: ["Angular", "React", "NestJS", "Node.js", "Docker", "Jenkins", "CI/CD"],
    },
    {
      company: "Cortek",
      location: "Perugia, Italy",
      title: "Full Stack Developer",
      description: `- Orchestrated e-commerce infrastructure primarily leveraging the Shopify platform
- Built Node.js and Next.js tools for daily operations including CSV-to-SQL data migration pipelines
- Developed frontend applications for retail stores with real-time integration to cash register systems
- Increased conversion rates by 15% through strategic content creation for Amazon and Meta platforms
- Reduced data processing time by 60% through automated ETL pipeline implementation`,
      dates: "Jan 2020 – Feb 2022",
      tags: ["Node.js", "Next.js", "React", "PostgreSQL", "MongoDB", "AWS"],
    },
    {
      company: "Brunello Cucinelli",
      location: "Solomeo, Italy",
      title: "Boutique Coordinator & CRM Specialist",
      description: `- Created AS400 and Salesforce CRM automations for daily activities.
- Provided technical support for point-of-sale systems and inventory management
- Conducted private tours of production facilities for Forbes 100 clients in Italian, English, Russian, and French
- Implemented visual merchandising guidelines and coordinated restocking logistics with store manager
- Increased client retention by 20% through personalized CRM management and luxury service delivery`,
      dates: "Mar 2017 – Dec 2019",
      tags: ["AS400", "Salesforce", "Retail Operations", "CRM"],
    },
  ],
  education: [
    {
      location: "IULM University - Milan",
      title: "Bachelor's Degree in Linguistic Mediation (Translation)",
      dates: "2011 - 2014",
      score: "Score: 110/110",
    },
  ],
  courses: [
    {
      provider: "UC Santa Cruz",
      title: "Data Structures & Algorithms in C/C++",
      dates: "Jul 2024",
    },
    {
      provider: "Duke University",
      title: "Python and Rust with Linux CLI Tools",
      dates: "Mar 2024",
    },
    {
      provider: "Duke University",
      title: "Rust Fundamentals",
      dates: "Jan 2024",
    },
  ],
  projects: [
    {
      title: "ATM UI Framework",
      period: "2024–present",
      technologies: ["React", "TypeScript", "Vite", "Vitest", "Playwright", "Docker", "Git", "Jenkins"],
      description:
        "Custom UI library used by 600,000+ devices. Migrated project from JSP + JS to use a modular TS, event-based UI architecture multi-tenant with TSX components with custom lifecycle hooks.",
    },
    {
      title: "Industria 4.0",
      period: "2023–2024",
      technologies: ["Angular", "Nest.js", "TypeORM", "PostgreSQL", "TypeScript", "Modbus", "Opcua", "Docker"],
      description: "Built live dashboards + analytics integrating IOT devices via modbus and opcua protocols",
    },
    {
      title: "E-commerce Data Pipeline",
      period: "2021-2022",
      technologies: ["Node.js", "MongoDB", "PostgreSQL", "AWS Lambda"],
      description:
        "Node.js + MongoDB ETL tool converting retail CSV exports to PostgreSQL. Automated daily inventory reconciliation for 50+ stores.",
    },
  ],
  languages: [
    { name: "English", level: "Fluent (C2)" },
    { name: "Russian", level: "Native" },
    { name: "Italian", level: "Native" },
    { name: "French", level: "Professional Working Proficiency (C1)" },
  ],
  skills: SKILLS,
  allSkills: ALL_SKILLS,
};

export default en;
