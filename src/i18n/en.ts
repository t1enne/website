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
      "Architect-level full-stack developer who designed a custom UI framework powering 600,000+ devices at a leading European bank. Led cross-functional teams of 1–4 engineers as the primary technical liaison between business and development, reducing CI pipeline time by 40% and production incidents by 30%. Polyglot engineer (React, Angular, NestJS, Rust, Go) with product sense built across banking, e-commerce, and luxury retail. Native-level collaboration in English, Italian, Russian, and French.",
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
      description: `
- Managed and mentored teams of 1-4 developers through full SDLC including requirements, sprint planning, and delivery
- Reduced CI pipeline time by 40% through build process optimization and containerization
- Containerized applications using Docker and set up on-premise Jenkins CI/CD pipelines
- Reduced production incidents by 30% through comprehensive testing and code review processes`,
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
      company: "Nexi Group",
      location: "Verona, Italy",
      title: "Frontend Architect",
      description: `- Led frontend development of ATM software for a leading Italian bank, deployed across Europe on 600K ATMs
- Ported JSP backend driven UI to a modern TypeScript event driven architecture
- Developed custom widgets + services, usable from a custom DSL based on JSON
- Deep integration with the existing ATM KAL layer
- Built custom bundle and build process for IE compat and strict security requirements
`,
      dates: "Jan 2022 – Jan 2024",
      tags: ["Project Management", "TypeScript", "DevOps"],
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
        "From full-stack architecture to performance tuning and team mentoring, I help teams ship reliable software that scales. Available for freelance projects, long-term engagements, and technical consulting.",
      title: "What I offer",
      deliverablesLabel: "Deliverables",
      cta: "Let's talk",
      ctaHref: "mailto:nasir.taov@gmail.com",
      processTitle: "How I work",
      process: [
        {
          title: "Discover",
          description:
            "We align on goals, constraints, and the shape of the product before writing code.",
        },
        {
          title: "Design",
          description:
            "I map the architecture, data model, and tooling to the problem - not the other way around.",
        },
        {
          title: "Build & iterate",
          description:
            "Short feedback loops with tests and reviews at every step, keeping quality and momentum.",
        },
        {
          title: "Ship & support",
          description:
            "I release in small batches and stay available to harden, monitor, and scale what we built.",
        },
      ],
    },
    services: [
      {
        icon: "LayoutGrid",
        title: "Full Stack Web Development",
        description:
          "End-to-end product development: modern frontends with React & Angular, and robust backends with Node.js, NestJS, Rust, and Go.",
        features: [
          "Web & SaaS apps, dashboards, and APIs",
          "React, Angular, TypeScript, Node.js, NestJS",
          "PostgreSQL, MongoDB, and efficient data modeling",
          "Rust & Go for performance-critical services",
        ],
      },
      {
        icon: "Cpu",
        title: "System Architecture & DevOps",
        description:
          "Designing scalable, maintainable systems and the pipelines that keep them healthy. I reduce build times, stabilize deployments, and lower incident counts.",
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
          "Battle-tested on 600,000+ ATMs in production. I specialize in constrained, high-security, event-driven UIs that demand reliability at scale.",
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
          "I've led teams of 1–4 engineers as the bridge between business and engineering. I level up developers, tighten code review, and keep delivery on track.",
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
        "A selection of products and tools I've designed and shipped across banking, e-commerce, industrial IoT, and open source.",
      title: "Selected work",
      projectCount: "projects",
      cta: "Let's talk",
      ctaHref: "mailto:nasir.taov@gmail.com",
    },
    projects: PROJECTS.en,
  },
};

export default en;
