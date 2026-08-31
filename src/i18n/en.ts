import type {
  ResumeI18n,
  ServicesI18n,
  PortfolioI18n,
  NavLabels,
} from "./types";
import { SKILLS, ALL_SKILLS } from "../data/skills";
import { PROJECTS } from "../data/projects";

const en: ResumeI18n & {
  services: ServicesI18n;
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
    services: "Services",
    portfolio: "Portfolio",
  },
  services: {
    labels: {
      pageTitle: "Services",
      intro:
        "Full-stack architecture, performance tuning, team mentoring. I build software that keeps working, and I'm available for freelance projects, longer engagements, and consulting.",
      title: "What I offer",
      deliverablesLabel: "Deliverables",
      cta: "Get in touch",
      ctaHref: "mailto:nasir.taov@gmail.com",
      processTitle: "How I work",
      process: [
        {
          title: "Talk before code",
          description:
            "Let's talk before anything gets built. I want to understand what actually matters to you - the budget, the goals, the parts that scare you. Sometimes the honest answer is that you shouldn't build it yet, and I'd rather say that now than after you've paid for it.",
        },
        {
          title: "Resilient",
          description:
            "I spent years building software that runs on 600,000+ ATMs. When downtime isn't an option, you learn to design for reliability from the start instead of discovering problems in production.",
        },
        {
          title: "Small pieces, shown as I go",
          description:
            "I ship in small chunks and show my work continuously, so you can see things working and change direction while it's cheap. No big reveals, no surprises at the end.",
        },
        {
          title: "I stick around after launch",
          description:
            "When the project ships I don't vanish. I monitor it, fix what breaks, and write things down so the people who take it over can actually understand and run it.",
        },
      ],
    },
    services: [
      {
        icon: "LayoutGrid",
        title: "Full Stack Web Development",
        description:
          "Modern frontends with React & Angular, and backends in Node.js and NestJS (TypeScript).",
        features: [
          "Web & SaaS apps, dashboards, and APIs",
          "React, Angular, TypeScript, Node.js, NestJS",
          "PostgreSQL, MongoDB, and data modeling",
          "Python for tooling, automation, and data work",
        ],
      },
      {
        icon: "Cpu",
        title: "System Architecture & DevOps",
        description:
          "Systems that stay up, and pipelines that keep them healthy. I focus on fast builds, stable deployments, and fewer production surprises.",
        features: [
          "Architecture reviews & modernization",
          "CI/CD pipelines (Jenkins, GitHub Actions)",
          "Docker containerization & orchestration",
          "Performance tuning and reliability engineering",
        ],
      },
      {
        icon: "Smartphone",
        title: "Mobile & Embedded Frontends",
        description:
          "Runs on 600,000+ ATMs in production. I build constrained, high-security, event-driven UIs that need to keep working at scale.",
        features: [
          "Custom UI frameworks & design systems",
          "Event-driven, offline-capable interfaces",
          "Legacy system rewrites (JSP → modern TS)",
          "Security & compatibility-hardened builds",
        ],
      },
      {
        icon: "Users",
        title: "Team Leadership & Mentoring",
        description:
          "I've led small, focused teams as the bridge between business and engineering. I mentor, review code, and keep delivery moving.",
        features: [
          "Technical lead & mentoring",
          "Code review and engineering standards",
          "Cross-functional team coordination",
          "Agile ceremonies & planning",
        ],
      },
    ],
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
