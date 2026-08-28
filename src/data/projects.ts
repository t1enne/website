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
      title: "ATM Software - Nexi Group",
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
      showOnResume: true,
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
      showOnResume: false,
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
      showOnResume: true,
    },
  ],
  it: [
    {
      title: "Software ATM - Nexi Group",
      period: "2022–2024",
      category: "Fintech / Architettura Frontend",
      description:
        "Architettura frontend per software ATM distribuito su 600K ATM in Europa per una grande banca italiana. Migrata l'interfaccia JSP a una moderna architettura event-driven in TypeScript.",
      technologies: ["TypeScript", "DSL custom", "Event-driven", "KAL"],
      highlights: [
        "600K ATM in produzione",
        "Widget custom & DSL basato su JSON",
        "Build compatibili IE e indurite",
      ],
      closedSource: true,
    },
    {
      title: "Industria 4.0",
      period: "2023–2024",
      category: "IoT Industriale",
      description:
        "Dashboard live e analytics che integrano device IoT tramite i protocolli Modbus e OPC UA per il monitoraggio industriale.",
      technologies: [
        "Angular",
        "Nest.js",
        "TypeORM",
        "PostgreSQL",
        "Modbus",
        "OPC UA",
      ],
      highlights: [
        "Telemetria device in tempo reale",
        "Integrazione protocolli Modbus & OPC UA",
        "Deployment basato su Docker",
      ],
      closedSource: true,
      showOnResume: true,
    },
    {
      title: "FormBaker",
      period: "2026–presente",
      category: "Open Source",
      description:
        "Motore runtime open-source per form condizionali e schemi cross-framework. Definizioni serializzabili con grafo delle dipendenze, risoluzione della visibilità e backend di validazione intercambiabili (arktype/zod). Node.js + browser. Integrazioni per React Hook Form, Angular e HTML5.",
      technologies: ["TypeScript", "Vitest", "arktype", "Zod", "Node.js"],
      highlights: [
        "Grafo delle dipendenze & risoluzione visibilità",
        "Validator intercambiabili arktype / zod",
        "Integrazioni React Hook Form, Angular & HTML5",
      ],
      url: "https://github.com/t1enne/formbaker",
      showOnResume: true,
    },
    {
      title: "nSwarm",
      period: "2026–presente",
      category: "Open Source / Orchestrazione AI",
      description:
        "Orchestrazione di componenti multi-agente su Pi + tmux, distribuita come pacchetto Python gestito con uv. Esegue pipeline sequenziali architect → coder → reviewer, isolando ogni attività nel proprio worktree git (cell), tracciando lo stato in status.json e gestendo le sessioni via tmux con permessi strumento basati sul ruolo.",
      technologies: ["Python", "tmux", "Git worktree", "CLI"],
      highlights: [
        "Pipeline sequenziale architect → coder → reviewer",
        "Isolamento per-cell tramite git worktree",
        "Permessi strumento applicati per ruolo",
      ],
      url: "https://github.com/t1enne/nswarm",
      showOnResume: false,
    },
    {
      title: "Quant Toolkit IBKR",
      period: "2025–presente",
      category: "Trading Quantitativo",
      description:
        "Toolkit quantitativo componibile per trading: sincronizzazione dati IBKR, indicatori tecnici (filtri di Kalman, rilevamento regime HMM) e un motore di backtesting puramente funzionale. Workflow CLI configurabili in JSON con validazione IS/OOS walk-forward, sweep/ottimizzazione degli iperparametri e multiprocessing.",
      technologies: [
        "Python",
        "IBKR REST API",
        "pandas",
        "Backtesting",
        "Multiprocessing",
      ],
      highlights: [
        "Motore di backtest puramente funzionale con stato immutabile",
        "Validazione IS/OOS walk-forward & sweep/ottimizzazione parametri",
        "Parallelismo su processi per sweep e fold",
      ],
      url: "https://github.com/t1enne/ibkr",
      showOnResume: true,
    },
    {
      title: "Pipeline Dati E-commerce",
      period: "2021–2022",
      category: "Dati / E-commerce",
      description:
        "Tool ETL Node.js + MongoDB che converte gli export CSV retail in PostgreSQL, con riconciliazione automatica giornaliera su oltre 50 negozi.",
      technologies: ["Node.js", "MongoDB", "PostgreSQL", "AWS Lambda"],
      highlights: [
        "50+ negozi riconciliati ogni giorno",
        "ETL automatico & recovery dagli errori",
        "Elaborazione serverless con AWS Lambda",
      ],
      closedSource: true,
      showOnResume: true,
    },
  ],
  fr: [
    {
      title: "Logiciel ATM - Nexi Group",
      period: "2022–2024",
      category: "Fintech / Architecture Frontend",
      description:
        "Architecture frontend pour un logiciel ATM déployé sur 600K ATM en Europe pour une grande banque italienne. Migration de l'interface JSP vers une architecture moderne événementielle en TypeScript.",
      technologies: ["TypeScript", "DSL personnalisé", "Événementiel", "KAL"],
      highlights: [
        "600K ATM en production",
        "Widgets personnalisés & DSL basé sur JSON",
        "Builds compatibles IE et durcis",
      ],
      closedSource: true,
    },
    {
      title: "Industrie 4.0",
      period: "2023–2024",
      category: "IoT Industriel",
      description:
        "Tableaux de bord en direct et analytique intégrant des dispositifs IoT via les protocoles Modbus et OPC UA pour le monitoring industriel.",
      technologies: [
        "Angular",
        "Nest.js",
        "TypeORM",
        "PostgreSQL",
        "Modbus",
        "OPC UA",
      ],
      highlights: [
        "Télémétrie en temps réel",
        "Intégration des protocoles Modbus & OPC UA",
        "Déploiement basé sur Docker",
      ],
      closedSource: true,
      showOnResume: true,
    },
    {
      title: "FormBaker",
      period: "2026–présent",
      category: "Open Source",
      description:
        "Moteur d'exécution open-source pour formulaires conditionnels et schémas multi-frameworks. Définitions sérialisables avec graphe de dépendances, résolution de visibilité et backends de validation interchangeables (arktype/zod). Node.js + browser. Intégrations pour React Hook Form, Angular et HTML5.",
      technologies: ["TypeScript", "Vitest", "arktype", "Zod", "Node.js"],
      highlights: [
        "Graphe de dépendances & résolution de visibilité",
        "Validateurs interchangeables arktype / zod",
        "Intégrations React Hook Form, Angular & HTML5",
      ],
      url: "https://github.com/t1enne/formbaker",
      showOnResume: true,
    },
    {
      title: "nSwarm",
      period: "2026–présent",
      category: "Open Source / Orchestration IA",
      description:
        "Orchestration de composants multi-agents sur Pi + tmux, distribuée comme package Python géré par uv. Exécute des pipelines séquentiels architect → coder → reviewer, isole chaque tâche dans son propre worktree git (cell), suit l'état dans status.json et pilote les sessions via tmux avec des permissions d'outils selon le rôle.",
      technologies: ["Python", "tmux", "Worktrees git", "CLI"],
      highlights: [
        "Pipeline séquentiel architect → coder → reviewer",
        "Isolation par cell via git worktree",
        "Permissions d'outils appliquées par rôle",
      ],
      url: "https://github.com/t1enne/nswarm",
      showOnResume: false,
    },
    {
      title: "Boîte à outils IBKR",
      period: "2025–présent",
      category: "Trading Quantitatif",
      description:
        "Toolkit de trading quantitatif composable : synchronisation de données IBKR, indicateurs techniques (filtres de Kalman, détection de régime HMM) et moteur de backtesting purement fonctionnel. Workflows CLI configurables en JSON avec validation IS/OOS walk-forward, balayage/optimisation d'hyperparamètres et multiprocessing.",
      technologies: [
        "Python",
        "IBKR REST API",
        "pandas",
        "Backtesting",
        "Multiprocessing",
      ],
      highlights: [
        "Moteur de backtest purement fonctionnel à état immuable",
        "Validation IS/OOS walk-forward & balayage/optimisation de paramètres",
        "Parallélisme par processus pour sweeps et folds",
      ],
      url: "https://github.com/t1enne/ibkr",
      showOnResume: true,
    },
    {
      title: "Pipeline de Données E-commerce",
      period: "2021–2022",
      category: "Données / E-commerce",
      description:
        "Outil ETL Node.js + MongoDB convertissant les exports CSV retail en PostgreSQL, avec réconciliation automatique quotidienne dans plus de 50 magasins.",
      technologies: ["Node.js", "MongoDB", "PostgreSQL", "AWS Lambda"],
      highlights: [
        "50+ magasins réconciliés chaque jour",
        "ETL automatisé & reprise sur erreur",
        "Traitement serverless avec AWS Lambda",
      ],
      closedSource: true,
      showOnResume: true,
    },
  ],
};
