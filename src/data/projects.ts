import type { Project } from "../i18n/types";

/**
 * Single source of truth for projects.
 * The Portfolio page and the Resume's Projects section both render from
 * these arrays, so project content lives here and nowhere else.
 *
 * - `showOnResume: true` → also listed in the resume (print) Projects section.
 * - Portfolios always render every entry.
 */
export const PROJECTS: Record<"en" | "it" | "fr", Project[]> = {
  en: [
    {
      title: "ATM Software - Banking / Fintech",
      period: "2022–2024",
      category: "Fintech / Frontend Architecture",
      description:
        "Frontend architecture for ATM software deployed on 600K ATMs across Europe for a leading Italian bank. Ported a JSP-driven UI to a modern TypeScript event-driven architecture.",
      technologies: ["TypeScript", "Custom DSL", "Event-driven", "KAL"],
      highlights: [
        "600K ATMs in production",
        "Custom widgets & JSON-based DSL",
        "IE-compatible, security-hardened builds",
      ],
      closedSource: true,
    },
    {
      title: "Industria 4.0",
      period: "2023–2024",
      category: "Industrial IoT",
      description:
        "Live dashboards and analytics integrating IoT devices via Modbus and OPC UA protocols for industrial monitoring.",
      technologies: [
        "Angular",
        "Nest.js",
        "TypeORM",
        "PostgreSQL",
        "Modbus",
        "OPC UA",
      ],
      highlights: [
        "Real-time device telemetry",
        "Modbus & OPC UA protocol integration",
        "Docker-based deployment",
      ],
      closedSource: true,
      showOnResume: false,
    },
    {
      title: "FormBaker",
      period: "2026–present",
      category: "Open Source",
      description:
        "Open-source runtime form engine for conditional form rendering and cross-framework schemas. Serializable form definitions with dependency graphs, visibility resolution, and swappable validation backends (arktype/zod). Node.js + browser. Integrations for React Hook Form, Angular, and HTML5.",
      technologies: ["TypeScript", "Vitest", "arktype", "Zod", "Node.js"],
      highlights: [
        "Dependency graph & visibility resolution",
        "arktype / zod swappable validators",
        "React Hook Form, Angular & HTML5 integrations",
      ],
      url: "https://github.com/t1enne/formbaker",
      showOnResume: true,
    },
    {
      title: "nSwarm",
      period: "2026–present",
      category: "Open Source / AI Orchestration",
      description:
        "Multi-agent swarm orchestration on Pi + tmux, shipped as a uv-managed Python package. Runs architect → coder → reviewer pipelines sequentially, isolating each task in its own git worktree (cell), tracking state in status.json, and driving sessions through tmux with role-based tool allow-listing.",
      technologies: ["Python", "tmux", "Git worktrees", "CLI"],
      highlights: [
        "Sequential architect → coder → reviewer pipeline",
        "Per-cell git worktree isolation",
        "Role-enforced tool permissions",
      ],
      url: "https://github.com/t1enne/nswarm",
      showOnResume: true,
    },
    {
      title: "IBKR Quant Toolkit",
      period: "2025–present",
      category: "Quantitative Trading",
      description:
        "Composable quantitative trading toolkit: IBKR market-data sync, technical indicators (Kalman filters, HMM regime detection), and a pure-functional backtesting engine. JSON-configurable CLI workflows with walk-forward IS/OOS validation, hyperparameter sweep/optimize, and multiprocessing.",
      technologies: [
        "Python",
        "IBKR REST API",
        "pandas",
        "Backtesting",
        "Multiprocessing",
      ],
      highlights: [
        "Pure-functional backtest engine with immutable state",
        "Walk-forward IS/OOS validation & param sweep/optimize",
        "Process-pool parallelism for sweeps and folds",
      ],
      url: "https://github.com/t1enne/ibkr",
      showOnResume: true,
    },
    {
      title: "E-commerce Data Pipeline",
      period: "2021–2022",
      category: "Data / E-commerce",
      description:
        "Node.js + MongoDB ETL tool converting retail CSV exports to PostgreSQL, with automated daily inventory reconciliation across 50+ stores.",
      technologies: ["Node.js", "MongoDB", "PostgreSQL", "AWS Lambda"],
      highlights: [
        "50+ stores reconciled daily",
        "Automated ETL & error recovery",
        "AWS Lambda serverless processing",
      ],
      closedSource: true,
      showOnResume: false,
    },
  ],
  it: [
    {
      title: "Software ATM - Banking / Fintech",
      period: "2022–2024",
      category: "Fintech / Architettura Frontend",
      description:
        "Architettura frontend per il software ATM di una grande banca italiana, installato su oltre 600.000 sportelli in Europa. L'interfaccia generata dal backend JSP è stata sostituita da un'architettura event-driven in TypeScript.",
      technologies: ["TypeScript", "DSL custom", "Event-driven", "KAL"],
      highlights: [
        "Oltre 600.000 ATM in produzione",
        "Widget su misura e DSL basato su JSON",
        "Build compatibili con IE e indurite per la sicurezza",
      ],
      closedSource: true,
    },
    {
      title: "Industria 4.0",
      period: "2023–2024",
      category: "IoT Industriale",
      description:
        "Dashboard in tempo reale e analisi dati, con dispositivi IoT integrati tramite i protocolli Modbus e OPC UA per il monitoraggio degli impianti.",
      technologies: [
        "Angular",
        "Nest.js",
        "TypeORM",
        "PostgreSQL",
        "Modbus",
        "OPC UA",
      ],
      highlights: [
        "Telemetria dei dispositivi in tempo reale",
        "Integrazione dei protocolli Modbus e OPC UA",
        "Rilascio su Docker",
      ],
      closedSource: true,
      showOnResume: false,
    },
    {
      title: "FormBaker",
      period: "2026–presente",
      category: "Open Source",
      description:
        "Motore open source per la gestione di form condizionali e schemi validi su più framework. Le definizioni dei form sono serializzabili e gestiscono grafo delle dipendenze e visibilità dei campi, con validatori intercambiabili (arktype/zod). Gira su Node.js e nel browser, con integrazioni per React Hook Form, Angular e HTML5.",
      technologies: ["TypeScript", "Vitest", "arktype", "Zod", "Node.js"],
      highlights: [
        "Grafo delle dipendenze e risoluzione della visibilità",
        "Validatori intercambiabili arktype / zod",
        "Integrazioni con React Hook Form, Angular e HTML5",
      ],
      url: "https://github.com/t1enne/formbaker",
      showOnResume: true,
    },
    {
      title: "nSwarm",
      period: "2026–presente",
      category: "Open Source / Orchestrazione AI",
      description:
        "Orchestrazione multi-agente su Pi e tmux, distribuita come pacchetto Python gestito con uv. Esegue in sequenza le pipeline architect, coder e reviewer, isolando ogni attività nel proprio worktree git (cell), tenendo traccia dello stato in status.json e pilotando le sessioni tmux con permessi sugli strumenti legati al ruolo.",
      technologies: ["Python", "tmux", "Git worktree", "CLI"],
      highlights: [
        "Pipeline sequenziale architect, coder, reviewer",
        "Isolamento di ogni cell nel proprio worktree git",
        "Permessi sugli strumenti applicati per ruolo",
      ],
      url: "https://github.com/t1enne/nswarm",
      showOnResume: true,
    },
    {
      title: "Quant Toolkit IBKR",
      period: "2025–presente",
      category: "Trading Quantitativo",
      description:
        "Libreria modulare per il trading quantitativo: sincronizzazione dei dati IBKR, indicatori tecnici (filtri di Kalman, rilevamento del regime HMM) e un motore di backtesting interamente funzionale. I flussi di lavoro da CLI si configurano in JSON, con validazione walk-forward IS/OOS, sweep e ottimizzazione degli iperparametri e multiprocessing.",
      technologies: [
        "Python",
        "IBKR REST API",
        "pandas",
        "Backtesting",
        "Multiprocessing",
      ],
      highlights: [
        "Motore di backtest funzionale con stato immutabile",
        "Validazione walk-forward IS/OOS con sweep e ottimizzazione dei parametri",
        "Parallelismo su più processi per sweep e fold",
      ],
      url: "https://github.com/t1enne/ibkr",
      showOnResume: true,
    },
    {
      title: "Pipeline Dati E-commerce",
      period: "2021–2022",
      category: "Dati / E-commerce",
      description:
        "Strumento ETL in Node.js e MongoDB che converte gli export CSV dei negozi in PostgreSQL, con riconciliazione automatica dell'inventario ogni giorno su oltre 50 punti vendita.",
      technologies: ["Node.js", "MongoDB", "PostgreSQL", "AWS Lambda"],
      highlights: [
        "Oltre 50 punti vendita riconciliati ogni giorno",
        "ETL automatico e recupero dagli errori",
        "Elaborazione serverless con AWS Lambda",
      ],
      closedSource: true,
      showOnResume: false,
    },
  ],
  fr: [
    {
      title: "Logiciel ATM - Banking / Fintech",
      period: "2022–2024",
      category: "Fintech / Architecture Frontend",
      description:
        "Architecture frontend pour le logiciel ATM d'une grande banque italienne, installé sur plus de 600 000 distributeurs en Europe. L'interface générée par le backend JSP a été remplacée par une architecture événementielle en TypeScript.",
      technologies: ["TypeScript", "DSL personnalisé", "Événementiel", "KAL"],
      highlights: [
        "Plus de 600 000 ATM en production",
        "Widgets sur mesure et DSL basé sur JSON",
        "Builds compatibles IE et durcis pour la sécurité",
      ],
      closedSource: true,
    },
    {
      title: "Industrie 4.0",
      period: "2023–2024",
      category: "IoT Industriel",
      description:
        "Tableaux de bord en temps réel et analyse de données, avec des dispositifs IoT intégrés via les protocoles Modbus et OPC UA pour le suivi des installations.",
      technologies: [
        "Angular",
        "Nest.js",
        "TypeORM",
        "PostgreSQL",
        "Modbus",
        "OPC UA",
      ],
      highlights: [
        "Télémétrie des dispositifs en temps réel",
        "Intégration des protocoles Modbus et OPC UA",
        "Mise en production via Docker",
      ],
      closedSource: true,
      showOnResume: false,
    },
    {
      title: "FormBaker",
      period: "2026–présent",
      category: "Open Source",
      description:
        "Moteur open source pour la gestion de formulaires conditionnels et de schémas valables sur plusieurs frameworks. Les définitions de formulaires sont sérialisables et gèrent le graphe de dépendances ainsi que la visibilité des champs, avec des validateurs interchangeables (arktype/zod). Fonctionne sur Node.js et dans le navigateur, avec des intégrations pour React Hook Form, Angular et HTML5.",
      technologies: ["TypeScript", "Vitest", "arktype", "Zod", "Node.js"],
      highlights: [
        "Graphe de dépendances et résolution de la visibilité",
        "Validateurs interchangeables arktype / zod",
        "Intégrations avec React Hook Form, Angular et HTML5",
      ],
      url: "https://github.com/t1enne/formbaker",
      showOnResume: true,
    },
    {
      title: "nSwarm",
      period: "2026–présent",
      category: "Open Source / Orchestration IA",
      description:
        "Orchestration multi-agents sur Pi et tmux, distribuée comme paquet Python géré avec uv. Exécute en séquence les pipelines architect, coder et reviewer, en isolant chaque tâche dans son propre worktree git (cell), en suivant l'état dans status.json et en pilotant les sessions tmux avec des permissions d'outils liées au rôle.",
      technologies: ["Python", "tmux", "Worktrees git", "CLI"],
      highlights: [
        "Pipeline séquentiel architect, coder, reviewer",
        "Isolation de chaque cell dans son propre worktree git",
        "Permissions d'outils appliquées selon le rôle",
      ],
      url: "https://github.com/t1enne/nswarm",
      showOnResume: true,
    },
    {
      title: "Boîte à outils IBKR",
      period: "2025–présent",
      category: "Trading Quantitatif",
      description:
        "Bibliothèque modulaire pour le trading quantitatif : synchronisation des données IBKR, indicateurs techniques (filtres de Kalman, détection de régime HMM) et moteur de backtesting entièrement fonctionnel. Les workflows en ligne de commande se configurent en JSON, avec validation walk-forward IS/OOS, balayage et optimisation des hyperparamètres et multiprocessing.",
      technologies: [
        "Python",
        "IBKR REST API",
        "pandas",
        "Backtesting",
        "Multiprocessing",
      ],
      highlights: [
        "Moteur de backtest fonctionnel à état immuable",
        "Validation walk-forward IS/OOS avec balayage et optimisation des paramètres",
        "Parallélisme multi-processus pour les sweeps et les folds",
      ],
      url: "https://github.com/t1enne/ibkr",
      showOnResume: true,
    },
    {
      title: "Pipeline de Données E-commerce",
      period: "2021–2022",
      category: "Données / E-commerce",
      description:
        "Outil ETL en Node.js et MongoDB qui convertit les exports CSV des boutiques en PostgreSQL, avec réconciliation automatique des stocks chaque jour sur plus de 50 points de vente.",
      technologies: ["Node.js", "MongoDB", "PostgreSQL", "AWS Lambda"],
      highlights: [
        "Plus de 50 points de vente réconciliés chaque jour",
        "ETL automatisé et reprise sur erreur",
        "Traitement serverless avec AWS Lambda",
      ],
      closedSource: true,
      showOnResume: false,
    },
  ],
};
