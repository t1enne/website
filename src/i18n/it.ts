import type {
  ResumeI18n,
  ServicesI18n,
  PortfolioI18n,
  NavLabels,
} from "./types";
import { SKILLS, ALL_SKILLS } from "../data/skills";
import { PROJECTS } from "../data/projects";

const it: ResumeI18n & {
  services: ServicesI18n;
  portfolio: PortfolioI18n;
  nav: NavLabels;
} = {
  labels: {
    aboutTitle: "Profilo Professionale",
    aboutContent:
      "Sviluppatore full-stack di livello architetturale, autore di un framework UI su misura che alimenta oltre 600.000 dispositivi presso una delle principali banche europee. Ho guidato team cross-funzionali di 1–4 ingegneri come punto di contatto tecnico principale tra business e sviluppo, riducendo i tempi della pipeline CI del 40% e gli incidenti in produzione del 30%. Ingegnere poliglotta (React, Angular, NestJS, Rust, Go) con visione di prodotto maturata nei settori bancario, e-commerce e luxury retail. Collaborazione a livello nativo in inglese, italiano, russo e francese.",
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
      description: `
Primo punto di contatto tecnico con il project manager del cliente, facilitando la comunicazione tra business e ingegneria.
Guidato team di sviluppo (1-4 persone) attraverso l'intero SDLC inclusi requisiti, sprint planning e delivery.
Ottimizzato processi di build e packaging, riducendo i tempi CI del 40%.
Containerizzato applicazioni con Docker e configurato pipeline Jenkins CI/CD on-premise.`,
      dates: "Mar 2022 – Presente",
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
      location: "Verona, Italia",
      title: "Architetto Frontend",
      description: `Guidato lo sviluppo frontend di software ATM per una grande banca italiana, distribuito in Europa su 600K ATM.
Migrata l'interfaccia guidata dal backend JSP a una moderna architettura event-driven in TypeScript.
Sviluppati widget e servizi custom, utilizzabili da un DSL custom basato su JSON.
Integrazione profonda con l'allocatore KAL esistente degli ATM.
Creato un bundle custom e un processo di build per la compatibilità IE e severi requisiti di sicurezza.`,
      dates: "Gen 2022 – Gen 2024",
      tags: ["Project Management", "TypeScript", "DevOps"],
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
  projects: PROJECTS.it.filter((p) => p.showOnResume),
  languages: [
    { name: "Inglese", level: "Fluente (C2)" },
    { name: "Russo", level: "Madrelingua" },
    { name: "Italiano", level: "Madrelingua" },
    { name: "Francese", level: "Competenza professionale (C1)" },
  ],
  skills: SKILLS,
  allSkills: ALL_SKILLS,
  nav: {
    resume: "Curriculum",
    services: "Servizi",
    portfolio: "Portfolio",
  },
  services: {
    labels: {
      pageTitle: "Servizi",
      intro:
        "Dall'architettura full-stack all'ottimizzazione delle performance e al mentoring di team, aiuto i team a consegnare software affidabile che scala. Disponibile per progetti freelance, collaborazioni a lungo termine e consulenza tecnica.",
      title: "Cosa offro",
      deliverablesLabel: "Deliverable",
      cta: "Inizia un progetto",
      ctaHref: "mailto:nasir.taov@gmail.com",
      processTitle: "Come lavoro",
      process: [
        {
          title: "Scoperta",
          description:
            "Allineiamo obiettivi, vincoli e forma del prodotto prima di scrivere codice.",
        },
        {
          title: "Progettazione",
          description:
            "Mappo architettura, modello dati e strumenti al problema - non il contrario.",
        },
        {
          title: "Sviluppo & iterazione",
          description:
            "Cicli di feedback brevi con test e revisioni in ogni fase, mantenendo qualità e ritmo.",
        },
        {
          title: "Rilascio & supporto",
          description:
            "Pubblico in piccoli batch e resto disponibile per rafforzare, monitorare e scalare ciò che abbiamo costruito.",
        },
      ],
    },
    services: [
      {
        icon: "LayoutGrid",
        title: "Sviluppo Web Full Stack",
        description:
          "Sviluppo di prodotto end-to-end: frontend moderni con React e Angular, e backend robusti con Node.js, NestJS, Rust e Go.",
        features: [
          "App web & SaaS, dashboard e API",
          "React, Angular, TypeScript, Node.js, NestJS",
          "PostgreSQL, MongoDB e data modeling efficiente",
          "Rust & Go per servizi ad alte prestazioni",
        ],
      },
      {
        icon: "Cpu",
        title: "Architettura di Sistemi & DevOps",
        description:
          "Progettazione di sistemi scalabili e manutenibili e delle pipeline che li mantengono stabili. Riduco i tempi di build, stabilizzo i deployment e abbasso gli incidenti.",
        features: [
          "Revisioni architetturali & modernizzazione",
          "Pipeline CI/CD (Jenkins, GitHub Actions)",
          "Contenitorizzazione Docker & orchestrazione",
          "Ottimizzazione delle performance & reliability engineering",
        ],
      },
      {
        icon: "Smartphone",
        title: "Frontend Mobile & Embedded",
        description:
          "Testato in produzione su oltre 600.000 ATM. Specializzato in UI event-driven con vincoli di sicurezza e di risorse, affidabili su larga scala.",
        features: [
          "Framework UI custom & design system",
          "Interfacce event-driven e offline-ready",
          "Riscritture di sistemi legacy (JSP → TS moderno)",
          "Build indurite per sicurezza e compatibilità",
        ],
      },
      {
        icon: "Users",
        title: "Leadership di Team & Mentoring",
        description:
          "Ho guidato team di 1–4 ingegneri come ponte tra business e ingegneria. Faccio crescere gli sviluppatori, stringo la code review e tengo la delivery nei tempi.",
        features: [
          "Technical lead & mentoring",
          "Code review e standard di ingegneria",
          "Coordinamento team cross-funzionali",
          "Cerimonie agile & pianificazione",
        ],
      },
    ],
  },
  portfolio: {
    labels: {
      pageTitle: "Portfolio",
      intro:
        "Una selezione di prodotti e strumenti che ho progettato e rilasciato nei settori bancario, e-commerce, IoT industriale e open source.",
      title: "Lavori selezionati",
      projectCount: "progetti",
      cta: "Costruiamo qualcosa insieme",
      ctaHref: "mailto:nasir.taov@gmail.com",
    },
    projects: PROJECTS.it,
  },
};

export default it;
