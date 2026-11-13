import type {
  ResumeI18n,
  PortfolioI18n,
  NavLabels,
} from "./types";
import { SKILLS, ALL_SKILLS } from "../data/skills";
import { PROJECTS } from "../data/projects";

const it: ResumeI18n & {
  portfolio: PortfolioI18n;
  nav: NavLabels;
} = {
  labels: {
    jobTitle: "Sviluppatore Full Stack Senior orientato al Frontend",
    aboutTitle: "Profilo Professionale",
    aboutContent:
      "Sviluppatore full stack orientato al frontend, oltre cinque anni di esperienza nella costruzione di software end to end. Ho lavorato a un framework di interfaccia usato su oltre 600.000 ATM di una banca europea e ho pubblicato il motore di form open source FormBaker e una libreria di backtesting quantitativo. Ogni giorno lavoro in TypeScript, React, Angular, Node e Python, con Docker e Linux. Seguo i developer junior e mi appoggio ai flussi di lavoro assistiti dall'AI: il mio quotidiano passa dal pi coding agent, con skill file personalizzati e workflow di agenti scriptati. Parlo inglese, francese, italiano e russo. Preferisco soluzioni semplici, che continuano a funzionare.",
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
      title: "Sviluppatore Full Stack Senior",
      description: `
Sviluppo full stack orientato al frontend in TypeScript e Node, dall'interfaccia ai servizi.
Ho seguito 3 sviluppatori junior: onboarding, code review e pair programming.
Tempi di build della CI ridotti da circa 3 minuti a circa 30 secondi, ripulendo la pipeline.
Applicazioni containerizzate con Docker e pipeline CI/CD Jenkins on-premise.
Flussi di sviluppo assistiti dall'AI con il pi coding agent: skill file personalizzati e workflow di agenti scriptati, condivisi nei miei dotfiles (github.com/t1enne/dotfiles).
Architettura frontend on-site per un cliente bancario (vedi sotto).`,
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
      description: `Sviluppo frontend del software ATM di una banca europea, su oltre 600.000 sportelli.
Interfaccia generata dal backend JSP sostituita da un'architettura event-driven in TypeScript.
Widget e servizi su misura, richiamabili da un DSL basato su JSON.
Integrazione con il layer KAL già presente sugli ATM.
Bundle e processo di build dedicati, per la compatibilità IE e la sicurezza della banca.`,
      dates: "Mar 2022 – Gen 2024",
      tags: ["TypeScript", "Angular", "Build Tooling", "DSL"],
    },
    {
      company: "Cortek",
      location: "Perugia, Italia",
      title: "Sviluppatore Full Stack",
      description: `Gestione dell'infrastruttura e-commerce, in gran parte su Shopify.
Strumenti Node.js e Next.js per le attività quotidiane, incluse le migrazioni dati CSV-SQL.
App frontend per i punti vendita, integrate in tempo reale con i sistemi di cassa.
Strategia di contenuti per i marketplace Amazon e Meta.
Pipeline ETL automatiche per portare i dati dei negozi da CSV a PostgreSQL.`,
      dates: "Gen 2020 – Feb 2022",
      tags: ["Node.js", "Next.js", "React", "PostgreSQL", "MongoDB", "AWS"],
    },
    {
      company: "Brunello Cucinelli",
      location: "Solomeo, Italia",
      title: "Coordinatore Boutique e Specialista CRM",
      description: `Passaggio al software da autodidatta, automatizzando le attività retail con degli script: così è iniziato il mio percorso.
Automazioni CRM su AS400 e Salesforce per il lavoro di ogni giorno.
Supporto ai sistemi di cassa e alla gestione dell'inventario.
Visite guidate agli stabilimenti in italiano, inglese, russo e francese.
Visual merchandising e coordinamento dei rifornimenti con lo store manager.
Gestione dei clienti tramite CRM e servizio in boutique.`,
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
    portfolio: "Portfolio",
  },
  portfolio: {
    labels: {
      jobTitle: "Sviluppatore Full Stack Senior orientato al Frontend",
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
