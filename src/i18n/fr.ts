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
      "Développeur full stack et lead technique, plus de cinq ans d'expérience à suivre des projets de bout en bout. J'ai travaillé sur un framework d'interface utilisé sur plus de 600 000 distributeurs automatiques d'une banque européenne, et j'ai publié un moteur de formulaires open source (FormBaker) ainsi qu'une bibliothèque de backtesting quantitatif. Au quotidien : TypeScript, React, Angular, Node et Python, avec Docker et Linux. Je parle français, italien, anglais et russe. Je préfère les solutions simples, qui tiennent dans le temps.",
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
- Référent technique d'une petite équipe, du recueil des besoins à la livraison
- Interface principale entre les équipes métier et le développement
- Mise en conteneur Docker des applications et mise en place de la pipeline Jenkins CI/CD on-premise
- Simplification du processus de build, pour que la CI cesse d'être le goulot d'étranglement
- Mission d'architecture frontend sur site chez une grande banque européenne, sous NDA (détails ci-dessous)
- TypeScript et Node sur toute la stack, de l'interface aux services`,
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
      company: "Client Banking / Fintech",
      location: "Vérone, Italie",
      title: "Architecte Frontend",
      description: `- Mission chez le client, réalisée pendant mon emploi chez Raintonic et couverte par son NDA
- Développement frontend du logiciel ATM d'une grande banque européenne, installé sur plus de 600 000 distributeurs en Europe
- Remplacement de l'interface générée par le backend JSP par une architecture événementielle en TypeScript
- Développement de widgets et de services sur mesure, appelables depuis un DSL basé sur JSON
- Intégration avec la couche KAL déjà présente sur les ATM
- Bundle et processus de build dédiés, pour la compatibilité IE et les exigences de sécurité de la banque`,
      dates: "Mars 2022 – Janv. 2024",
      tags: ["Project Management", "TypeScript", "DevOps"],
    },
    {
      company: "Cortek",
      location: "Pérouse, Italie",
      title: "Développeur Full Stack",
      description: `- Gestion de l'infrastructure e-commerce, en grande partie sur Shopify
- Outils Node.js et Next.js pour les opérations quotidiennes, dont les migrations de données CSV vers SQL
- Applications frontend pour les boutiques, intégrées en temps réel aux systèmes de caisse
- Gestion des contenus pour les marketplaces Amazon et Meta
- Pipelines ETL automatisées pour faire passer les données des boutiques de CSV vers PostgreSQL`,
      dates: "Janv. 2020 – Févr. 2022",
      tags: ["Node.js", "Next.js", "React", "PostgreSQL", "MongoDB", "AWS"],
    },
    {
      company: "Brunello Cucinelli",
      location: "Solomeo, Italie",
      title: "Coordinateur de Boutique et Spécialiste CRM",
      description: `- Passage au développement en autodidacte : j'automatisais le quotidien de la boutique avec des scripts, c'est comme ça que tout a commencé
- Automatisations CRM sur AS400 et Salesforce pour le travail de tous les jours
- Support technique des systèmes de caisse et de la gestion des stocks
- Visites guidées des ateliers en italien, anglais, russe et français
- Merchandising visuel et coordination des réapprovisionnements avec le responsable du magasin
- Suivi de la relation client via le CRM et le service en boutique`,
      dates: "Mars 2017 – Déc. 2019",
      tags: ["AS400", "Salesforce", "Retail Operations", "CRM"],
    },
  ],
  education: [
    {
      location: "Université IULM - Milan",
      title: "Médiation Linguistique",
      degree: "Licence",
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
        "Architecture full stack, optimisation des performances, mentorat. Je construis des logiciels qui durent, et je suis disponible pour des projets freelance, des collaborations longues et du conseil.",
      title: "Ce que je propose",
      deliverablesLabel: "Livrables",
      cta: "Contactez-moi",
      ctaHref: "mailto:nasir.taov@gmail.com",
      processTitle: "Comment je travaille",
      process: [
        {
          title: "On parle avant le code",
          description:
            "Avant de construire quoi que ce soit, parlons-en. Je veux comprendre ce qui compte vraiment pour vous : le budget, les objectifs, les points qui vous inquiètent. Parfois la réponse honnête, c'est qu'il vaut mieux attendre encore, et je préfère vous le dire tout de suite plutôt qu'une fois la facture passée.",
        },
        {
          title: "Conçu pour tenir",
          description:
            "J'ai passé des années à construire un logiciel qui tourne sur plus de 600 000 distributeurs : là, l'arrêt n'est pas une option, et on apprend à concevoir pour la fiabilité dès le départ au lieu de découvrir les problèmes en production.",
        },
        {
          title: "Par petits pas, toujours visibles",
          description:
            "Je livre par petits blocs et je vous montre le travail au fur et à mesure : vous voyez ce qui fonctionne et vous pouvez changer de cap tant que ça coûte encore peu. Pas d'effet d'annonce, pas de surprise au lancement.",
        },
        {
          title: "Je reste après la livraison",
          description:
            "Une fois le projet livré, je ne disparais pas : je le suis, je répare ce qui casse et je documente, pour que ceux qui reprennent le projet puissent réellement le comprendre et le faire tourner.",
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
          "Applications web et SaaS, tableaux de bord et API",
          "React, Angular, TypeScript, Node.js, NestJS",
          "PostgreSQL, MongoDB et modélisation des données",
          "Python pour l'outillage, l'automatisation et les données",
        ],
      },
      {
        icon: "Cpu",
        title: "Architecture et DevOps",
        description:
          "Des systèmes qui tiennent dans la durée, et des pipelines qui les gardent en bonne santé. Des builds rapides, des déploiements stables et moins de surprises en production.",
        features: [
          "Revue d'architecture et modernisation",
          "Pipelines CI/CD (Jenkins, GitHub Actions)",
          "Conteneurs Docker et orchestration",
          "Optimisation des performances et fiabilité",
        ],
      },
      {
        icon: "Smartphone",
        title: "Frontends Mobile et Embarqués",
        description:
          "Ça tourne sur plus de 600 000 distributeurs en production. Je construis des interfaces événementielles avec de fortes contraintes de sécurité et de ressources, qui doivent tenir à grande échelle.",
        features: [
          "Frameworks UI et design systems sur mesure",
          "Interfaces événementielles, utilisables hors ligne",
          "Réécriture de systèmes legacy (de JSP vers TypeScript)",
          "Builds durcis pour la sécurité et la compatibilité",
        ],
      },
      {
        icon: "Users",
        title: "Encadrement d'Équipe et Mentorat",
        description:
          "J'ai encadré de petites équipes, en faisant le lien entre le métier et le développement. Je fais du mentorat, je relis le code et je fais avancer la livraison.",
        features: [
          "Lead technique et mentorat",
          "Revue de code et standards de développement",
          "Coordination d'équipes transverses",
          "Cérémonies agiles et planification",
        ],
      },
    ],
  },
  portfolio: {
    labels: {
      pageTitle: "Portfolio",
      intro:
        "Produits et outils réalisés dans la banque, le e-commerce, l'IoT industriel et l'open source.",
      title: "Travaux sélectionnés",
      projectCount: "projets",
      cta: "Contactez-moi",
      ctaHref: "mailto:nasir.taov@gmail.com",
    },
    projects: PROJECTS.fr,
  },
};

export default fr;
