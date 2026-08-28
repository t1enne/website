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
      "Développeur full-stack senior et lead technique avec plus de 5 ans d'expérience à construire des logiciels de bout en bout. J'ai travaillé sur un framework UI qui tourne sur plus de 600 000 ATMs dans une banque européenne, et j'ai publié un moteur de formulaires open source (FormBaker) et un toolkit de backtesting quant. Au quotidien, je travaille en TypeScript, React, Angular, Node et Python, avec Docker et Linux à portée de main. Courant en français, italien, russe et anglais. Je préfère les solutions simples qui continuent de fonctionner.",
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
- Lead technique pour une équipe ciblée, responsable de tout le cycle, des exigences à la livraison
- Principal interlocuteur entre les parties prenantes métier et l'ingénierie
- Conteneurisé les applications avec Docker et mis en place la pipeline CI/CD Jenkins on-premise
- Nettoyé le processus de build pour que la CI ne soit plus le goulot d'étranglement
- Mission d'architecte frontend sur site chez Nexi Group (voir ci-dessous)
- TypeScript et Node à travers la stack, de l'interface aux services`,
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
      description: `- Géré l'infrastructure e-commerce, principalement via Shopify
- Créé des outils Node.js et Next.js pour les opérations quotidiennes, incluant des migrations CSV vers SQL
- Applications frontend pour des magasins avec intégration en temps réel aux systèmes de caisse
- Stratégie de contenu pour les places de marché Amazon et Meta
- Pipelines ETL automatisés pour faire passer les données des magasins du CSV vers PostgreSQL`,
      dates: "Janv. 2020 – Févr. 2022",
      tags: ["Node.js", "Next.js", "React", "PostgreSQL", "MongoDB", "AWS"],
    },
    {
      company: "Brunello Cucinelli",
      location: "Solomeo, Italie",
      title: "Coordinateur de Boutique & Spécialiste CRM",
      description: `- Passage auto-didacte vers le logiciel : j'automatisais les opérations retail quotidiennes avec des scripts, c'est de là que ma carrière d'ingénieur est partie
- Créé des automatisations CRM AS400 et Salesforce pour le travail quotidien
- Support technique pour les systèmes de point de vente et la gestion des stocks
- Animé des visites privées des installations de production en italien, anglais, russe et français
- Géré le merchandising visuel et coordonné les réapprovisionnements avec le responsable du magasin
- Suivi les relations clients via une gestion CRM personnelle et le service en boutique`,
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
        "Architecture full-stack, optimisation des performances, mentorat d'équipe. Je construis des logiciels qui continuent de fonctionner, et je suis disponible pour des projets freelance, des collaborations plus longues et du conseil.",
      title: "Ce que je propose",
      deliverablesLabel: "Livrables",
      cta: "Contactez-moi",
      ctaHref: "mailto:nasir.taov@gmail.com",
      processTitle: "Comment je travaille",
      process: [
        {
          title: "On parle avant le code",
          description:
            "Avant de construire quoi que ce soit, parlons. Je veux comprendre ce qui compte vraiment pour vous : le budget, les objectifs, les parties qui vous inquiètent. Parfois la réponse honnête, c'est que vous ne devriez pas encore construire, et je préfère vous le dire tout de suite plutôt qu'après avoir payé.",
        },
        {
          title: "Conçu pour tenir le coup",
          description:
            "J'ai passé des années à construire des logiciels qui tournent sur plus de 600 000 ATMs. Quand l'arrêt n'est pas une option, on apprend à concevoir pour la fiabilité dès le départ, au lieu de découvrir les problèmes en production.",
        },
        {
          title: "Par petits pas, toujours visibles",
          description:
            "Je vous livre en petites tranches et je vous montre le travail au fur et à mesure : vous voyez les choses fonctionner et vous changez de cap tant que c'est encore peu coûteux. Pas de grande révélation, pas de surprise après le lancement.",
        },
        {
          title: "Je reste après le lancement",
          description:
            "Quand le projet part, je ne disparais pas. Je surveille, je répare ce qui casse et je documente tout, pour que ceux qui reprennent le projet puissent réellement le comprendre et le faire tourner.",
        },
      ],
    },
    services: [
      {
        icon: "LayoutGrid",
        title: "Développement Web Full Stack",
        description:
          "Des frontends modernes en React et Angular, des backends en Node.js et NestJS (TypeScript).",
        features: [
          "Applications web & SaaS, tableaux de bord et API",
          "React, Angular, TypeScript, Node.js, NestJS",
          "PostgreSQL, MongoDB et modélisation de données",
          "Python pour l'outillage, l'automatisation et les données",
        ],
      },
      {
        icon: "Cpu",
        title: "Architecture & DevOps",
        description:
          "Systèmes qui restent debout, et pipelines qui les gardent en bonne santé. Je mise sur des builds rapides, des déploiements stables et moins de surprises en production.",
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
          "Tourne sur plus de 600 000 ATM en production. Je construis des interfaces événementielles contraintes et hautement sécurisées, qui doivent continuer de fonctionner à grande échelle.",
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
          "J'ai dirigé de petites équipes ciblées en tant que pont entre le métier et l'ingénierie. Je fais du mentorat, je révise le code et je garde la livraison en mouvement.",
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
        "Produits et outils que j'ai construits dans les secteurs de la banque, du e-commerce, de l'IoT industriel et de l'open source.",
      title: "Travaux sélectionnés",
      projectCount: "projets",
      cta: "Contactez-moi",
      ctaHref: "mailto:nasir.taov@gmail.com",
    },
    projects: PROJECTS.fr,
  },
};

export default fr;
