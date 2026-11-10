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
      "Sviluppatore full stack e technical lead con più di cinque anni di esperienza, abituato a seguire un progetto dall'inizio alla fine. Ho lavorato a un framework di interfaccia usato su oltre 600.000 ATM di una banca europea e ho pubblicato un motore di form open source (FormBaker) e una libreria per il backtesting quantitativo. Nel lavoro di tutti i giorni uso TypeScript, React, Angular, Node e Python, con Docker e Linux. Parlo italiano, inglese, francese e russo. Preferisco soluzioni semplici, che reggono nel tempo.",
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
Referente tecnico per un team ristretto, dalla raccolta dei requisiti alla consegna.
Punto di contatto tra le esigenze del business e il lavoro di sviluppo.
Applicazioni containerizzate con Docker e pipeline CI/CD Jenkins installata on-premise.
Ho snellito il processo di build, che rallentava tutta la CI.
Consulenza on-site sull'architettura frontend per una grande banca europea, sotto NDA (dettagli sotto).
TypeScript e Node lungo tutto lo stack, dall'interfaccia ai servizi.`,
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
      description: `Consulenza on-site per il cliente, svolta mentre ero in Raintonic e coperta dal suo NDA.
Ho guidato lo sviluppo frontend del software ATM di una grande banca europea, installato su oltre 600.000 sportelli in Europa.
Ho sostituito l'interfaccia generata dal backend JSP con un'architettura event-driven in TypeScript.
Ho sviluppato widget e servizi su misura, richiamabili da un DSL basato su JSON.
Integrazione con il layer KAL già presente sugli ATM.
Ho realizzato un bundle e un processo di build dedicati, per la compatibilità con IE e i requisiti di sicurezza della banca.`,
      dates: "Mar 2022 – Gen 2024",
      tags: ["Project Management", "TypeScript", "DevOps"],
    },
    {
      company: "Cortek",
      location: "Perugia, Italia",
      title: "Sviluppatore Full Stack",
      description: `Gestione dell'infrastruttura e-commerce, in gran parte su Shopify.
Strumenti in Node.js e Next.js per le attività quotidiane, comprese le migrazioni dati da CSV a SQL.
Applicazioni frontend per i punti vendita, integrate in tempo reale con i sistemi di cassa.
Gestione dei contenuti per i marketplace Amazon e Meta.
Pipeline ETL automatiche per portare i dati dei negozi da CSV a PostgreSQL.`,
      dates: "Gen 2020 – Feb 2022",
      tags: ["Node.js", "Next.js", "React", "PostgreSQL", "MongoDB", "AWS"],
    },
    {
      company: "Brunello Cucinelli",
      location: "Solomeo, Italia",
      title: "Coordinatore Boutique e Specialista CRM",
      description: `Passaggio al software da autodidatta: automatizzavo con degli script le attività retail di ogni giorno, ed è così che è iniziato il mio percorso da sviluppatore.
Automazioni CRM su AS400 e Salesforce per il lavoro quotidiano.
Supporto tecnico ai sistemi di cassa e alla gestione dell'inventario.
Visite guidate agli stabilimenti in italiano, inglese, russo e francese.
Visual merchandising e coordinamento dei rifornimenti con lo store manager.
Gestione del rapporto con i clienti tramite CRM e servizio in boutique.`,
      dates: "Mar 2017 – Dic 2019",
      tags: ["AS400", "Salesforce", "Retail Operations", "CRM"],
    },
  ],
  education: [
    {
      location: "IULM University - Milan",
      title: "Mediazione Linguistica",
      degree: "Laurea triennale",
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
        "Architettura full stack, ottimizzazione delle performance, mentoring. Costruisco software che dura, e sono disponibile per progetti freelance, collaborazioni lunghe e consulenza.",
      title: "Cosa offro",
      deliverablesLabel: "Deliverable",
      cta: "Contattami",
      ctaHref: "mailto:nasir.taov@gmail.com",
      processTitle: "Come lavoro",
      process: [
        {
          title: "Prima parliamo, poi scriviamo codice",
          description:
            "Prima di costruire qualcosa, parliamone. Voglio capire cosa conta davvero: il budget, gli obiettivi, i punti su cui hai dei dubbi. A volte la risposta onesta è che è meglio aspettare, e preferisco dirtelo subito invece che a lavoro pagato.",
        },
        {
          title: "Pensato per reggere",
          description:
            "Ho passato anni a costruire software che gira su oltre 600.000 ATM: lì un fermo non è un'opzione, e si impara a progettare pensando all'affidabilità fin dall'inizio, invece di scoprire i problemi in produzione.",
        },
        {
          title: "Passi piccoli, sempre visibili",
          description:
            "Consegno a blocchi e ti mostro il lavoro man mano: vedi le cose funzionare e puoi cambiare direzione finché costa poco. Niente colpi di scena alla fine.",
        },
        {
          title: "Resto anche dopo la consegna",
          description:
            "Finito il progetto non sparisco: lo seguo, sistemo quello che si rompe e scrivo la documentazione, così chi lo prende in mano riesce a capirlo e a mandarlo avanti.",
        },
      ],
    },
    services: [
      {
        icon: "LayoutGrid",
        title: "Sviluppo Web Full Stack",
        description:
          "Frontend moderni in React e Angular, backend in Node.js e NestJS (TypeScript).",
        features: [
          "App web e SaaS, dashboard e API",
          "React, Angular, TypeScript, Node.js, NestJS",
          "PostgreSQL, MongoDB e modellazione dei dati",
          "Python per tooling, automazione e lavoro sui dati",
        ],
      },
      {
        icon: "Cpu",
        title: "Architettura di Sistemi e DevOps",
        description:
          "Sistemi che restano in piedi e pipeline che li tengono in salute. Cerco build veloci, rilasci stabili e meno sorprese in produzione.",
        features: [
          "Revisione dell'architettura e modernizzazione",
          "Pipeline CI/CD (Jenkins, GitHub Actions)",
          "Container Docker e orchestrazione",
          "Ottimizzazione delle performance e affidabilità",
        ],
      },
      {
        icon: "Smartphone",
        title: "Frontend Mobile ed Embedded",
        description:
          "Gira su oltre 600.000 ATM in produzione. Costruisco interfacce event-driven con vincoli stretti di sicurezza e risorse, che devono reggere su larga scala.",
        features: [
          "Framework UI e design system su misura",
          "Interfacce event-driven, utilizzabili anche offline",
          "Riscrittura di sistemi legacy (da JSP a TypeScript)",
          "Build indurite per sicurezza e compatibilità",
        ],
      },
      {
        icon: "Users",
        title: "Leadership di Team e Mentoring",
        description:
          "Ho guidato team piccoli come ponte tra business e sviluppo. Faccio mentoring, revisione del codice e tengo il ritmo della consegna.",
        features: [
          "Technical lead e mentoring",
          "Revisione del codice e standard di sviluppo",
          "Coordinamento di team cross-funzionali",
          "Cerimonie agile e pianificazione",
        ],
      },
    ],
  },
  portfolio: {
    labels: {
      pageTitle: "Portfolio",
      intro:
        "Prodotti e strumenti realizzati tra banking, e-commerce, IoT industriale e open source.",
      title: "Lavori selezionati",
      projectCount: "progetti",
      cta: "Contattami",
      ctaHref: "mailto:nasir.taov@gmail.com",
    },
    projects: PROJECTS.it,
  },
};

export default it;
