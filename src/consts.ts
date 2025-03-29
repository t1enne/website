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
    "about.title": "About",
    "about.content": `
Developed a custom UI framework powering 600.000 devices. 
Working on full stack Node.js applications with governmental institutions and banks.

Passionate about OSS, Linux, testing and functional programming.`,
    "work.title": "Work Experience",
    "education.title": "Education",
    "langs.title": "Languages",

    "location.padua": "Padua, Italy",
    "location.perugia": "Perugia, Italy",
    "location.solomeo": "Solomeo, Italy",

    "title.fullstack": "Full Stack Developer",
    "title.boutique": "Boutique Coordinator",

    "work.rt.desc":
      `Led the development of a new FE for ATMs across Europe for a leading Italian bank.
Oversaw architectural planning and provided strategic direction for the project.
Acted as the primary technical liaison with the client's PM, facilitating clear and effective communication. 
Also worked on development for large enterprise clients, mainly leveraging Node.
Led small teams (1 to 4 people) during different phases of development.
Other tasks:
- Optimizing build processes/packaging 
- Containerization via Docker 
- Setting up on premise Jenkins CI/CD pipelines`,
    "work.cortek.desc":
      `Had a pivotal role in orchestrating e-commerce infrastructure, primarily leveraging the Shopify platform.
Also worked on tools to help with day to day operations (moving .csv to SQL, FE for retail stores, integrations with cash registers).
Led content creation for e-commerce platforms (Amazon and Meta)`,
    "work.bc.desc":
      `During my tenure at Brunello Cucinelli, I excelled in various roles, primarily as a Boutique Coordinator.
In this capacity, I provided guided tours of the company's production facilities to high profile international clients (Forbes 100) in Italian, English, Russian and French.
Additionally, I specialized in Made to Measure services and offered comprehensive customer consultation and service throughout the sales process.
I was proficient in utilizing AS400/Salesforce systems.
Furthermore, I implemented visual merchandising guidelines for window displays and shelves and managed restocking activities, participating in order processing during sales campaigns in collaboration with the Store Manager.`,
    "edu.bd.title": "Bachelor's Degree in Linguistic Mediation",

    "langs.en": "English",
    "langs.fr": "French",
    "langs.it": "Italian",
    "langs.ru": "Russian",
    "langs.lvl.bi": "Bilingual",
    "langs.lvl.vf": "Very fluent",
    "langs.lvl.f": "Fluent",
    "dates.july": "Jul",
    "dates.jan": "Jan",
    "dates.march": "Mar",
  },
  it: {
    "about.title": "Chi sono",
    "about.content": `
Autore di framework UI custom per grande banca italiana, usato su 600.000 ATM. 
Sviluppo applicazione full stack Node.js per istituzioni. 

Mi piace l'OSS, Linux, il testing e la programmazione funzionale.
`,
    "work.title": "Esperienza Lavorativa",
    "education.title": "Formazione",
    "langs.title": "Lingue",
    "location.padua": "Padova (PD)",
    "location.perugia": "Perugia (PG)",
    "location.solomeo": "Solomeo (PG)",
    "title.fullstack": "Sviluppatore Full Stack",
    "title.boutique": "Coordinatore di Boutique",
    "work.rt.desc":
      `Guidato lo sviluppo di framework FE per ATM in tutta Europa.
Supervisionato architettura e strategia per il progetto.
Primo punto di contatto con il PM del cliente.
Lavorato anche per grandi aziende, principalmente con Node.
Guidato piccoli team (da 1 a 4 persone) durante diverse fasi di vita dei progetti.
Altri task:
- Ottimizzare packaging e build
- Containerizzazione con Docker
- Setup di pipeline Jenkins CI/CD on-premise
		`,
    "work.cortek.desc": `
Orchestrazione dell'infrastruttura di e-commerce, principalmente tramite Shopify. 
Lavorato su strumenti per aiutare con le operazioni quotidiane (.csv to SQL, FE per negozi, integrazioni casse).
Guidato la creazione di contenuti per piattaforme di e-commerce (Amazon e Meta)`,
    "work.bc.desc":
      "Durante la mia esperienza presso Brunello Cucinelli, ho eccelso in vari ruoli, principalmente come Coordinatore di Boutique. In questo ruolo, ho fornito visite guidate degli impianti di produzione dell'azienda a clienti internazionali di alto profilo (Forbes 100) in italiano, inglese, russo e francese. Inoltre, mi sono specializzato nei servizi su misura e ho offerto consulenza e servizio clienti completi durante tutto il processo di vendita. Ero competente nell'utilizzo dei sistemi AS400/Salesforce. Inoltre, ho implementato linee guida di visual merchandising per le vetrine e gli scaffali e gestito le attività di rifornimento, partecipando all'elaborazione degli ordini durante le campagne di vendita in collaborazione con il responsabile del negozio.",
    "edu.bd.title": "Laurea in Mediazione Linguistica",
    "langs.en": "Inglese",
    "langs.fr": "Francese",
    "langs.it": "Italiano",
    "langs.ru": "Russo",
    "langs.lvl.bi": "Bilingue",
    "langs.lvl.vf": "Molto fluente",
    "langs.lvl.f": "Fluente",
    "dates.july": "Lug",
    "dates.jan": "Gen",
    "dates.march": "Mar",
  },
} as const;
