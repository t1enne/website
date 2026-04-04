// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Nasir Taov's Personal Website";
export const SITE_DESCRIPTION = "Welcome!";

export const LANGS = {
  en: "English",
  it: "Italiano",
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    "about.title": "Professional Summary",
    "about.content": `Full-stack developer with 5+ years of enterprise experience in banking and government sectors. Built a custom UI framework deployed to 600,000+ devices. Expert in React, Angular, Node.js (NestJS), PostgreSQL, Docker, and CI/CD pipelines. Fluent in English, Italian, Russian, and French.`,
    "work.title": "Work Experience",
    "education.title": "Education",
    "education.score": "Score",
    "courses.title": "Courses & Certifications",
    "projects.title": "Projects",
    "skills.title": "Technical Skills",
    "langs.title": "Languages",

    "location.padua": "Padua, Italy",
    "location.perugia": "Perugia, Italy",
    "location.solomeo": "Solomeo, Italy",

    "title.fullstack": "Full Stack Developer",
    "title.boutique": "Boutique Coordinator & CRM Specialist",

    "work.rt.desc": `- Led frontend development of ATM software for a leading Italian bank, deployed across Europe using Angular, React, and NestJS
- Designed micro-frontend architecture serving 600+ ATMs, reducing load time by 25%
- Served as primary technical liaison with client's project manager, facilitating clear communication between business and engineering teams
- Managed and mentored teams of 1-4 developers through full SDLC including requirements, sprint planning, and delivery
- Reduced CI pipeline time by 40% through build process optimization and containerization
- Containerized applications using Docker and set up on-premise Jenkins CI/CD pipelines
- Reduced production incidents by 30% through comprehensive testing and code review processes`,
    "work.cortek.desc": `- Orchestrated e-commerce infrastructure primarily leveraging the Shopify platform
- Built Node.js and Next.js tools for daily operations including CSV-to-SQL data migration pipelines
- Developed frontend applications for retail stores with real-time integration to cash register systems
- Increased conversion rates by 15% through strategic content creation for Amazon and Meta platforms
- Reduced data processing time by 60% through automated ETL pipeline implementation`,
    "work.bc.desc": `- Created AS400 and Salesforce CRM automations for daily activities.
- Provided technical support for point-of-sale systems and inventory management
- Conducted private tours of production facilities for Forbes 100 clients in Italian, English, Russian, and French
- Implemented visual merchandising guidelines and coordinated restocking logistics with store manager
- Increased client retention by 20% through personalized CRM management and luxury service delivery`,
    "edu.bd.title": "Bachelor's Degree in Linguistic Mediation (Translation)",

    "projects.atm.title": "ATM UI Framework",
    "projects.atm.desc":
      "Custom UI library used by 600,000+ devices. Migrated project from JSP + JS to use a modular TS, event-based UI architecture multi-tenant with TSX components with custom lifecycle hooks.",
    "projects.iot.title": "Industria 4.0",
    "projects.iot.desc":
      "Built live dashboards + analytics integrating IOT devices via modbus and opcua protocols",
    "projects.pipeline.title": "E-commerce Data Pipeline",
    "projects.pipeline.desc":
      "Node.js + MongoDB ETL tool converting retail CSV exports to PostgreSQL. Automated daily inventory reconciliation for 50+ stores.",

    "langs.en": "English",
    "langs.en.level": "Fluent (C2)",
    "langs.ru": "Russian",
    "langs.ru.level": "Native",
    "langs.it": "Italian",
    "langs.it.level": "Native",
    "langs.fr": "French",
    "langs.fr.level": "Professional Working Proficiency (C1)",
    "langs.lvl.bi": "Bilingual",
    "contact.citizenship": "Italian citizenship",
    "contact.location": "Location",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.linkedin": "LinkedIn",
    "contact.citizenshipLabel": "Citizenship",
    "langs.lvl.vf": "Fluent (C2)",
    "langs.lvl.f": "Fluent",
    "dates.july": "Jul",
    "dates.jan": "Jan",
    "dates.march": "Mar",
  },
  it: {
    "about.title": "Profilo Professionale",
    "about.content": `Sviluppatore full-stack Node.js con 5+ anni di esperienza enterprise nei settori bancario e governativo. Autore di framework UI personalizzato distribuito su 600.000+ dispositivi. Esperto in React, Angular, Node.js (NestJS), PostgreSQL, Docker e pipeline CI/CD. Fluente in inglese, italiano, russo e francese.`,
    "work.title": "Esperienza Professionale",
    "education.title": "Formazione",
    "education.score": "Voto",
    "courses.title": "Corsi e Certificazioni",
    "projects.title": "Progetti",
    "skills.title": "Competenze Tecniche",
    "langs.title": "Lingue",
    "location.padua": "Padova, Italia",
    "location.perugia": "Perugia, Italia",
    "location.solomeo": "Solomeo, Italia",
    "title.fullstack": "Sviluppatore Full Stack",
    "title.boutique": "Coordinatore di Boutique & CRM Specialist",
    "work.rt.desc": `Guidato lo sviluppo frontend di software ATM per una grande banca italiana, distribuito in Europa con Angular, React e NestJS.
Progettato architettura micro-frontend per 600+ ATM, riducendo il tempo di caricamento del 25%.
Primo punto di contatto tecnico con il project manager del cliente, facilitando la comunicazione tra business e ingegneria.
Guidato team di sviluppo (1-4 persone) attraverso l'intero SDLC inclusi requisiti, sprint planning e delivery.
Ottimizzato processi di build e packaging, riducendo i tempi CI del 40%.
Containerizzato applicazioni con Docker e configurato pipeline Jenkins CI/CD on-premise.`,
    "work.cortek.desc": `Orchestrato infrastruttura e-commerce principalmente tramite Shopify.
Creato tool Node.js e Next.js per operazioni quotidiane incluse pipeline di migrazione CSV-to-SQL.
Sviluppato applicazioni frontend per negozi retail con integrazione real-time ai sistemi di cassa.
Guidato strategia content creation per Amazon e Meta, aumentando conversioni del 15%.`,
    "work.bc.desc": `Creato automazioni di sistemi CRM AS400 e Salesforce per le attività quotidiane.
Fornito supporto tecnico per sistemi point-of-sale e gestione inventario.
Condotto visite private degli impianti per clienti Forbes 100 in italiano, inglese, russo e francese.
Implementato linee guida visual merchandising e coordinato logistica rifornimenti con store manager.`,
    "edu.bd.title": "Laurea in Mediazione Linguistica (Traduzione)",
    "projects.atm.title": "ATM UI Framework",
    "projects.atm.desc":
      "Libreria UI usata su 600.000+ dispositivi. Migato il progetto da JSP + JS in TS, con architettura modulare ad eventi multi-tenant, con componenti TSX con custom lifecycle hooks.",
    "projects.iot.title": "Industria 4.0",
    "projects.iot.desc":
      "Costruito dashboard + analytics integrando device IOT tramite protocolli modbus e opcua.",
    "projects.pipeline.title": "E-commerce Data Pipeline",
    "projects.pipeline.desc":
      "Tool ETL Node.js + MongoDB per conversione CSV retail in PostgreSQL. Reconciliazione inventario automatica per 50+ negozi.",
    "langs.en": "Inglese",
    "langs.en.level": "Fluente (C2)",
    "langs.ru": "Russo",
    "langs.ru.level": "Madrelingua",
    "langs.it": "Italiano",
    "langs.it.level": "Madrelingua",
    "langs.fr": "Francese",
    "langs.fr.level": "Competenza professionale (C1)",
    "langs.lvl.bi": "Bilingue",
    "contact.citizenship": "Cittadinanza italiana",
    "contact.location": "Sede",
    "contact.email": "Email",
    "contact.phone": "Telefono",
    "contact.linkedin": "LinkedIn",
    "contact.citizenshipLabel": "Cittadinanza",
    "langs.lvl.vf": "Molto fluente (C2)",
    "langs.lvl.f": "Fluente",
    "dates.july": "Lug",
    "dates.jan": "Gen",
    "dates.march": "Mar",
  },
} as const;
