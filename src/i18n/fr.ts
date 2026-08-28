import type {
  ResumeI18n,
  ServicesI18n,
  PortfolioI18n,
  NavLabels,
} from "./types";
import { SKILLS, ALL_SKILLS } from "../data/skills";
import { PROJECTS } from "../data/projects";

const fr: ResumeI18n & {
  services: ServicesI18n;
  portfolio: PortfolioI18n;
  nav: NavLabels;
} = {
  labels: {
    aboutTitle: "Profil Professionnel",
    aboutContent:
      "Développeur full-stack senior et lead technique. J'ai conçu un framework UI utilisé par plus de 600 000 ATMs au sein d'une grande banque européenne, en servant de pont entre le métier et le développement. J'ai publié un moteur de formulaires open source (FormBaker) et un toolkit de backtesting quant. Solides compétences DevOps (Docker, CI/CD, Linux) et profondeur full-stack en React, Angular, Node, Rust, Go et Python. Collaboratif, courant en français, italien, russe et anglais.",
    workTitle: "Expérience Professionnelle",
    educationTitle: "Formation",
    educationScore: "Note",
    coursesTitle: "Cours et Certifications",
    projectsTitle: "Projets",
    skillsTitle: "Compétences Techniques",
    langsTitle: "Langues",
    citizenship: "Italienne",
    citizenshipLabel: "Citoyenneté",
    contactLocation: "Lieu",
    contactEmail: "Email",
    contactPhone: "Téléphone",
    contactLinkedin: "LinkedIn",
    contactGithub: "Github",
    location: "Padoue, Italie",
  },
  workExperience: [
    {
      company: "Raintonic",
      location: "Padoue, Italie",
      title: "Développeur Full Stack",
      description: `
- Conçu une architecture micro-frontend desservant plus de 600 ATM, réduisant le temps de chargement de 25 %
- Assuré le rôle d'interlocuteur technique principal avec le chef de projet du client, facilitant la communication entre les équipes métier et ingénierie
- Lead technique responsable de l'ensemble du SDLC pour des équipes ciblées et très performantes, en tant que point de contact principal entre les parties prenantes métier et l'ingénierie
- Réduit le temps de pipeline CI de 40 % grâce à l'optimisation des processus de build et à la conteneurisation
- Conteneurisé les applications avec Docker et mis en place des pipelines CI/CD Jenkins on-premise
- Réduit les incidents en production de 30 % grâce à des processus rigoureux de test et de revue de code
- Livré une mission d'architecte frontend sur site chez Nexi Group (voir ci-dessous)
- Conçu des services critiques en termes de performance en Rust et Go en complément des stacks TypeScript`,
      dates: "Mars 2022 – Présent",
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
      location: "Vérone, Italie",
      title: "Architecte Frontend",
      description: `- Mission client sur site réalisée pendant mon emploi chez Raintonic (avec ID et matériel Nexi fournis)
- Dirigé le développement frontend de logiciels ATM pour une grande banque italienne, déployé en Europe sur 600K+ ATM
- Migré l'interface pilotée par le backend JSP vers une architecture moderne orientée événements en TypeScript
- Développé des widgets et services personnalisés, utilisables depuis un DSL sur mesure basé sur JSON
- Intégration approfondie avec la couche KAL existante des ATM
- Créé un bundle personnalisé et un processus de build pour la compatibilité IE et des exigences de sécurité strictes`,
      dates: "Mars 2022 – Janv. 2024",
      tags: ["Project Management", "TypeScript", "DevOps"],
    },
    {
      company: "Cortek",
      location: "Pérouse, Italie",
      title: "Développeur Full Stack",
      description: `- Orchestré l'infrastructure e-commerce principalement via la plateforme Shopify
- Créé des outils Node.js et Next.js pour les opérations quotidiennes, incluant des pipelines de migration CSV vers SQL
- Développé des applications frontend pour des magasins avec intégration en temps réel aux systèmes de caisse
- Augmenté les taux de conversion de 15 % grâce à la création stratégique de contenu pour Amazon et Meta
- Réduit le temps de traitement des données de 60 % grâce à l'implémentation de pipelines ETL automatisés`,
      dates: "Janv. 2020 – Févr. 2022",
      tags: ["Node.js", "Next.js", "React", "PostgreSQL", "MongoDB", "AWS"],
    },
    {
      company: "Brunello Cucinelli",
      location: "Solomeo, Italie",
      title: "Coordinateur de Boutique & Spécialiste CRM",
      description: `- Passage auto-didacte vers le logiciel : automatisé les opérations retail quotidiennes, la base technique qui a lancé une carrière d'ingénieur full-stack
- Créé des automatisations CRM AS400 et Salesforce pour les activités quotidiennes
- Fourni un support technique pour les systèmes de point de vente et la gestion des stocks
- Animé des visites privées des installations de production pour des clients Forbes-listed en italien, anglais, russe et français
- Mis en œuvre les directives de merchandising visuel et coordonné la logistique de réapprovisionnement avec le responsable du magasin
- Augmenté la fidélisation client de 20 % grâce à une gestion CRM personnalisée et un service de luxe`,
      dates: "Mars 2017 – Déc. 2019",
      tags: ["AS400", "Salesforce", "Retail Operations", "CRM"],
    },
  ],
  education: [
    {
      location: "Université IULM - Milan",
      title: "Licence en Médiation Linguistique (Traduction)",
      dates: "2011 - 2014",
      score: "Note : 110/110",
    },
  ],
  courses: [
    {
      provider: "UC Santa Cruz",
      title: "Structures de Données & Algorithmes en C/C++",
      dates: "Juil. 2024",
    },
    {
      provider: "Duke University",
      title: "Python et Rust avec outils CLI Linux",
      dates: "Mars 2024",
    },
    {
      provider: "Duke University",
      title: "Fondamentaux de Rust",
      dates: "Janv. 2024",
    },
  ],
  projects: PROJECTS.fr.filter((p) => p.showOnResume),
  languages: [
    { name: "Anglais", level: "Courant (C2)" },
    { name: "Russe", level: "Langue maternelle" },
    { name: "Italien", level: "Langue maternelle" },
    { name: "Français", level: "Compétence professionnelle (C1)" },
  ],
  skills: SKILLS,
  allSkills: ALL_SKILLS,
  nav: {
    resume: "CV",
    services: "Services",
    portfolio: "Portfolio",
  },
  services: {
    labels: {
      pageTitle: "Services",
      intro:
        "De l'architecture full-stack à l'optimisation des performances et au mentorat d'équipe, j'aide les équipes à livrer des logiciels fiables qui passent à l'échelle. Disponible pour des projets freelance, des collaborations à long terme et du conseil technique.",
      title: "Ce que je propose",
      deliverablesLabel: "Livrables",
      cta: "Contactez-moi",
      ctaHref: "mailto:nasir.taov@gmail.com",
      processTitle: "Comment je travaille",
      process: [
        {
          title: "Découverte",
          description:
            "Nous alignons objectifs, contraintes et forme du produit avant d'écrire le moindre code.",
        },
        {
          title: "Conception",
          description:
            "Je mappe l'architecture, le modèle de données et les outils au problème - pas l'inverse.",
        },
        {
          title: "Développement & itération",
          description:
            "Boucles de feedback courtes avec tests et revues à chaque étape, en gardant qualité et rythme.",
        },
        {
          title: "Livraison & support",
          description:
            "Je publie par petits lots et reste disponible pour durcir, surveiller et faire évoluer ce que nous avons construit.",
        },
      ],
    },
    services: [
      {
        icon: "LayoutGrid",
        title: "Développement Web Full Stack",
        description:
          "Développement produit de bout en bout : des frontends modernes en React et Angular, et des backends robustes en Node.js, NestJS, Rust et Go.",
        features: [
          "Applications web & SaaS, tableaux de bord et API",
          "React, Angular, TypeScript, Node.js, NestJS",
          "PostgreSQL, MongoDB et modélisation de données efficace",
          "Rust & Go pour les services critiques en performance",
        ],
      },
      {
        icon: "Cpu",
        title: "Architecture & DevOps",
        description:
          "Conception de systèmes scalables et maintenables ainsi que des pipelines qui les gardent stables. Je réduis les temps de build, stabilise les déploiements et fais baisser les incidents.",
        features: [
          "Revues d'architecture & modernisation",
          "Pipelines CI/CD (Jenkins, GitHub Actions)",
          "Conteneurisation Docker & orchestration",
          "Optimisation des performances & fiabilité",
        ],
      },
      {
        icon: "Smartphone",
        title: "Frontends Mobile & Embarqués",
        description:
          "Éprouvé en production sur plus de 600 000 ATM. Je me spécialise dans les interfaces événementielles contraintes et hautement sécurisées, fiables à grande échelle.",
        features: [
          "Frameworks UI personnalisés & design systems",
          "Interfaces événementielles, compatibles hors-ligne",
          "Réécritures de systèmes legacy (JSP → TS moderne)",
          "Builds durcis pour la sécurité et la compatibilité",
        ],
      },
      {
        icon: "Users",
        title: "Leadership d'Équipe & Mentorat",
        description:
          "J'ai dirigé des équipes ciblées et très performantes en tant que pont entre le métier et l'ingénierie. Je fais progresser les développeurs, renforce la revue de code et maintient la livraison dans les délais.",
        features: [
          "Lead technique & mentorat",
          "Revue de code et standards d'ingénierie",
          "Coordination d'équipes transversales",
          "Cérémonies agile & planification",
        ],
      },
    ],
  },
  portfolio: {
    labels: {
      pageTitle: "Portfolio",
      intro:
        "Une sélection de produits et d'outils que j'ai conçus et livrés dans les secteurs de la banque, du e-commerce, de l'IoT industriel et de l'open source.",
      title: "Travaux sélectionnés",
      projectCount: "projets",
      cta: "Contactez-moi",
      ctaHref: "mailto:nasir.taov@gmail.com",
    },
    projects: PROJECTS.fr,
  },
};

export default fr;
