import type { ResumeI18n } from "./types";
import { SKILLS, ALL_SKILLS } from "../data/skills";

const it: ResumeI18n = {
  labels: {
    aboutTitle: "Profilo Professionale",
    aboutContent:
      "Sviluppatore full-stack Node.js con 5+ anni di esperienza enterprise nei settori bancario e governativo. Autore di framework UI personalizzato distribuito su 600.000+ dispositivi. Esperto in React, Angular, Node.js (NestJS), PostgreSQL, Docker e pipeline CI/CD. Fluente in inglese, italiano, russo e francese.",
    workTitle: "Esperienza Professionale",
    educationTitle: "Formazione",
    educationScore: "Voto",
    coursesTitle: "Corsi e Certificazioni",
    projectsTitle: "Progetti",
    skillsTitle: "Competenze Tecniche",
    langsTitle: "Lingue",
    citizenship: "Italiana",
    citizenshipLabel: "Cittadinanza",
    contactLocation: "Sede",
    contactEmail: "Email",
    contactPhone: "Telefono",
    contactLinkedin: "LinkedIn",
    contactGithub: "Github",
    location: "Padova, Italia",
  },
  workExperience: [
    {
      company: "Raintonic",
      location: "Padova, Italia",
      title: "Sviluppatore Full Stack",
      description: `Guidato lo sviluppo frontend di software ATM per una grande banca italiana, distribuito in Europa con Angular, React e NestJS.
Progettato architettura micro-frontend per 600+ ATM, riducendo il tempo di caricamento del 25%.
Primo punto di contatto tecnico con il project manager del cliente, facilitando la comunicazione tra business e ingegneria.
Guidato team di sviluppo (1-4 persone) attraverso l'intero SDLC inclusi requisiti, sprint planning e delivery.
Ottimizzato processi di build e packaging, riducendo i tempi CI del 40%.
Containerizzato applicazioni con Docker e configurato pipeline Jenkins CI/CD on-premise.`,
      dates: "Mar 2022 – Presente",
      tags: ["Angular", "React", "NestJS", "Node.js", "Docker", "Jenkins", "CI/CD"],
    },
    {
      company: "Cortek",
      location: "Perugia, Italia",
      title: "Sviluppatore Full Stack",
      description: `Orchestrato infrastruttura e-commerce principalmente tramite Shopify.
Creato tool Node.js e Next.js per operazioni quotidiane incluse pipeline di migrazione CSV-to-SQL.
Sviluppato applicazioni frontend per negozi retail con integrazione real-time ai sistemi di cassa.
Guidato strategia content creation per Amazon e Meta, aumentando conversioni del 15%.`,
      dates: "Gen 2020 – Feb 2022",
      tags: ["Node.js", "Next.js", "React", "PostgreSQL", "MongoDB", "AWS"],
    },
    {
      company: "Brunello Cucinelli",
      location: "Solomeo, Italia",
      title: "Coordinatore di Boutique & CRM Specialist",
      description: `Creato automazioni di sistemi CRM AS400 e Salesforce per le attività quotidiane.
Fornito supporto tecnico per sistemi point-of-sale e gestione inventario.
Condotto visite private degli impianti per clienti Forbes 100 in italiano, inglese, russo e francese.
Implementato linee guida visual merchandising e coordinato logistica rifornimenti con store manager.`,
      dates: "Mar 2017 – Dic 2019",
      tags: ["AS400", "Salesforce", "Retail Operations", "CRM"],
    },
  ],
  education: [
    {
      location: "IULM University - Milan",
      title: "Laurea in Mediazione Linguistica (Traduzione)",
      dates: "2011 - 2014",
      score: "Voto: 110/110",
    },
  ],
  courses: [
    {
      provider: "UC Santa Cruz",
      title: "Data Structures & Algorithms in C/C++",
      dates: "Lug 2024",
    },
    {
      provider: "Duke University",
      title: "Python and Rust with Linux CLI Tools",
      dates: "Mar 2024",
    },
    {
      provider: "Duke University",
      title: "Rust Fundamentals",
      dates: "Gen 2024",
    },
  ],
  projects: [
    {
      title: "ATM UI Framework",
      period: "2024–presente",
      technologies: ["React", "TypeScript", "Vite", "Vitest", "Playwright", "Docker", "Git", "Jenkins"],
      description:
        "Libreria UI usata su 600.000+ dispositivi. Migrato il progetto da JSP + JS in TS, con architettura modulare ad eventi multi-tenant, con componenti TSX con custom lifecycle hooks.",
    },
    {
      title: "Industria 4.0",
      period: "2023–2024",
      technologies: ["Angular", "Nest.js", "TypeORM", "PostgreSQL", "TypeScript", "Modbus", "Opcua", "Docker"],
      description:
        "Costruito dashboard + analytics integrando device IOT tramite protocolli modbus e opcua.",
    },
    {
      title: "E-commerce Data Pipeline",
      period: "2021-2022",
      technologies: ["Node.js", "MongoDB", "PostgreSQL", "AWS Lambda"],
      description:
        "Tool ETL Node.js + MongoDB per conversione CSV retail in PostgreSQL. Reconciliazione inventario automatica per 50+ negozi.",
    },
  ],
  languages: [
    { name: "Inglese", level: "Fluente (C2)" },
    { name: "Russo", level: "Madrelingua" },
    { name: "Italiano", level: "Madrelingua" },
    { name: "Francese", level: "Competenza professionale (C1)" },
  ],
  skills: SKILLS,
  allSkills: ALL_SKILLS,
};

export default it;
