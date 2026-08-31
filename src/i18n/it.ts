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
      "Sviluppatore full-stack senior e technical lead con oltre 5 anni di esperienza nel costruire software a 360 gradi. Ho lavorato a un framework UI che gira su oltre 600.000 ATM per una banca europea, e ho pubblicato un motore di form open source (FormBaker) e un toolkit di backtesting quant. Nel quotidiano uso TypeScript, React, Angular, Node e Python, con Docker e Linux a portata di mano. Fluente in italiano, inglese, francese e russo. Preferisco soluzioni semplici che continuano a funzionare.",
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
Technical lead per un team focalizzato, con responsabilità sull'intero ciclo, dai requisiti alla consegna.
Interfaccia principale tra stakeholder di business e ingegneria.
Containerizzate applicazioni con Docker e configurata la pipeline Jenkins CI/CD on-premise.
Sistemato il processo di build così la CI smette di essere il collo di bottiglia.
Engagement on-site di architettura frontend con un'importante banca europea, sotto NDA (vedi sotto).
TypeScript e Node trasversali allo stack, dalla UI ai servizi.`,
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
      company: "Cliente Banking / Fintech",
      location: "Verona, Italia",
      title: "Architetto Frontend",
      description: `Engagement on-site per conto del cliente, svolto mentre ero assunto presso Raintonic, sotto NDA del cliente.
Guidato lo sviluppo frontend di software ATM per un'importante banca europea, distribuito in Europa su 600K+ ATM.
Migrata l'interfaccia guidata dal backend JSP a una moderna architettura event-driven in TypeScript.
Sviluppati widget e servizi custom, utilizzabili da un DSL custom basato su JSON.
Integrazione profonda con l'allocatore KAL esistente degli ATM.
Creato un bundle custom e un processo di build per la compatibilità IE e severi requisiti di sicurezza.`,
      dates: "Mar 2022 – Gen 2024",
      tags: ["Project Management", "TypeScript", "DevOps"],
    },
    {
      company: "Cortek",
      location: "Perugia, Italia",
      title: "Sviluppatore Full Stack",
      description: `Gestita infrastruttura e-commerce, principalmente tramite Shopify.
Creati tool Node.js e Next.js per le operazioni quotidiane, incluse migrazioni CSV-SQL.
App frontend per negozi retail con integrazione live ai sistemi di cassa.
Strategia contenuti per i marketplace Amazon e Meta.
Pipelines ETL automatizzate per portare i dati negozio da CSV a PostgreSQL.`,
      dates: "Gen 2020 – Feb 2022",
      tags: ["Node.js", "Next.js", "React", "PostgreSQL", "MongoDB", "AWS"],
    },
    {
      company: "Brunello Cucinelli",
      location: "Solomeo, Italia",
      title: "Coordinatore di Boutique & CRM Specialist",
      description: `Transizione autodidatta verso il software: automatizzavo le operazioni retail quotidiane con script, ed è da lì che è partita la mia carriera da ingegnere.
Create automazioni CRM AS400 e Salesforce per il lavoro di tutti i giorni.
Supporto tecnico per i sistemi point-of-sale e la gestione inventario.
Condotte visite private degli impianti in italiano, inglese, russo e francese.
Gestito visual merchandising e coordinato i rifornimenti con lo store manager.
Seguiti i rapporti con i clienti attraverso la gestione CRM personale e il servizio in negozio.`,
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
        "Architettura full-stack, ottimizzazione delle performance, mentoring di team. Costruisco software che continua a funzionare, e sono disponibile per progetti freelance, collaborazioni più lunghe e consulenza.",
      title: "Cosa offro",
      deliverablesLabel: "Deliverable",
      cta: "Contattami",
      ctaHref: "mailto:nasir.taov@gmail.com",
      processTitle: "Come lavoro",
      process: [
        {
          title: "Parliamone prima di scrivere codice",
          description:
            "Prima di costruire qualcosa, parliamone. Voglio capire cosa conta davvero per te: il budget, gli obiettivi, le parti che ti preoccupano. A volte la risposta onesta è che non dovresti ancora costruirlo, e preferisco dirtelo subito piuttosto che dopo averlo pagato.",
        },
        {
          title: "Pensato per non fermarsi",
          description:
            "Ho passato anni a costruire software che funziona su oltre 600.000 ATM. Quando lo stop non è un'opzione, impari a progettare per l'affidabilità fin dall'inizio, invece di scoprire i problemi in produzione.",
        },
        {
          title: "Piccoli passi, sempre visibili",
          description:
            "Ti consegno in piccoli blocchi e ti mostro il lavoro strada facendo: vedi le cose funzionare e cambi direzione finché è ancora conveniente. Niente grandi annunci, niente sorprese dopo il lancio.",
        },
        {
          title: "Resto anche dopo il lancio",
          description:
            "Quando il progetto esce non sparisco. Lo monitoro, sistemo ciò che si rompe e lo documento, così chi lo prende in mano riesce davvero a capirlo e a farlo funzionare.",
        },
      ],
    },
    services: [
      {
        icon: "LayoutGrid",
        title: "Sviluppo Web Full Stack",
        description:
          "Frontend moderni con React e Angular, backend in Node.js e NestJS (TypeScript).",
        features: [
          "App web & SaaS, dashboard e API",
          "React, Angular, TypeScript, Node.js, NestJS",
          "PostgreSQL, MongoDB e data modeling",
          "Python per tooling, automazione e lavoro sui dati",
        ],
      },
      {
        icon: "Cpu",
        title: "Architettura di Sistemi & DevOps",
        description:
          "Sistemi che restano su, e pipeline che li tengono sani. Punto su build veloci, deployment stabili e meno sorprese in produzione.",
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
          "Gira su oltre 600.000 ATM in produzione. Costruisco UI event-driven con vincoli di sicurezza e risorse, che devono continuare a funzionare su larga scala.",
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
          "Ho guidato team piccoli e focalizzati come ponte tra business e ingegneria. Faccio mentoring, rivedo il codice e tengo la delivery in movimento.",
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
        "Prodotti e strumenti che ho costruito nei settori bancario, e-commerce, IoT industriale e open source.",
      title: "Lavori selezionati",
      projectCount: "progetti",
      cta: "Contattami",
      ctaHref: "mailto:nasir.taov@gmail.com",
    },
    projects: PROJECTS.it,
  },
};

export default it;
