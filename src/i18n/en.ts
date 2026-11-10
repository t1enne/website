import type {
  ResumeI18n,
  PortfolioI18n,
  NavLabels,
} from "./types";
import { SKILLS, ALL_SKILLS } from "../data/skills";
import { PROJECTS } from "../data/projects";

const en: ResumeI18n & {
  portfolio: PortfolioI18n;
  nav: NavLabels;
} = {
  labels: {
    aboutTitle: "Professional Summary",
    aboutContent:
      "Senior full-stack developer and tech lead with 5+ years building software end to end. I've worked on a UI framework that runs on 600,000+ ATMs at a European bank, and shipped an open-source form engine (FormBaker) and a quant backtesting toolkit. Day to day I work in TypeScript, React, Angular, Node, and Python, with Docker and Linux close by. Fluent in English, French, Italian, and Russian. I prefer boring solutions that keep working.",
    workTitle: "Work Experience",
    educationTitle: "Education",
    educationScore: "Score",
    coursesTitle: "Courses",
    projectsTitle: "Projects",
    skillsTitle: "Technical Skills",
    langsTitle: "Languages",
    citizenship: "Italian",
    citizenshipLabel: "Citizenship",
    contactLocation: "Location",
    contactEmail: "Email",
    contactLinkedin: "LinkedIn",
    contactGithub: "Github",
    location: "Padua, Italy",
  },
  workExperience: [
    {
      company: "Raintonic",
      location: "Padua, Italy",
      title: "Full Stack Developer",
      description: `
- Technical lead for a focused team, owning the full cycle from requirements to delivery
- Main bridge between business stakeholders and engineering
- Containerized applications with Docker and set up the on-premise Jenkins CI/CD pipeline
- Cleaned up the build process so CI stops being the bottleneck
- On-site frontend-architect engagement with a major European banking client, under NDA (see below)
- TypeScript and Node across the stack, from UI to services`,
      dates: "Mar 2022 – Present",
      tags: [
        "Angular",
        "React",
        "NestJS",
        "Node.js",
        "Docker",
        "Jenkins",
        "CI/CD",
      ],
    },
    {
      company: "Banking / Fintech Client",
      location: "Verona, Italy",
      title: "Frontend Architect",
      description: `- On-site client engagement delivered while employed at Raintonic, under the client's NDA
- Led frontend development of ATM software for a major European bank, deployed across Europe on 600K+ ATMs
- Ported JSP backend driven UI to a modern TypeScript event driven architecture
- Developed custom widgets + services, usable from a custom DSL based on JSON
- Deep integration with the existing ATM KAL layer
- Built custom bundle and build process for IE compat and strict security requirements
`,
      dates: "Mar 2022 – Jan 2024",
      tags: ["Project Management", "TypeScript", "DevOps"],
    },
    {
      company: "Cortek",
      location: "Perugia, Italy",
      title: "Full Stack Developer",
      description: `- Ran e-commerce infrastructure, largely on Shopify
- Built Node.js and Next.js tools for daily operations, including CSV-to-SQL data migrations
- Frontend apps for retail stores with live integration to the cash register systems
- Content strategy for Amazon and Meta marketplaces
- Automated ETL pipelines to get store data from CSV into PostgreSQL`,
      dates: "Jan 2020 – Feb 2022",
      tags: ["Node.js", "Next.js", "React", "PostgreSQL", "MongoDB", "AWS"],
    },
    {
      company: "Brunello Cucinelli",
      location: "Solomeo, Italy",
      title: "Boutique Coordinator & CRM Specialist",
      description: `- Self-taught pivot into software: automated daily retail operations with scripts, which kicked off my engineering career
- Built AS400 and Salesforce CRM automations for day-to-day work
- Technical support for point-of-sale systems and inventory management
- Led private tours of the production facilities in Italian, English, Russian, and French
- Handled visual merchandising and coordinated restocking with the store manager
- Looked after client relationships through personal CRM management and store service`,
      dates: "Mar 2017 – Dec 2019",
      tags: ["AS400", "Salesforce", "Retail Operations", "CRM"],
    },
  ],
  education: [
    {
      location: "IULM University - Milan",
      title: "Linguistic Mediation",
      degree: "Bachelor's Degree",
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
  projects: PROJECTS.en.filter((p) => p.showOnResume),
  languages: [
    { name: "English", level: "Fluent (C2)" },
    { name: "Russian", level: "Native" },
    { name: "Italian", level: "Native" },
    { name: "French", level: "Professional Working Proficiency (C1)" },
  ],
  skills: SKILLS,
  allSkills: ALL_SKILLS,
  nav: {
    resume: "Resume",
    portfolio: "Portfolio",
  },
  portfolio: {
    labels: {
      pageTitle: "Portfolio",
      intro:
        "Products and tools I've built across banking, e-commerce, industrial IoT, and open source.",
      title: "Selected work",
      projectCount: "projects",
      cta: "Get in touch",
      ctaHref: "mailto:nasir.taov@gmail.com",
    },
    projects: PROJECTS.en,
  },
};

export default en;
