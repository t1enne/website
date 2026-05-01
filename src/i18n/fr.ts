import type { ResumeI18n } from "./types";
import { SKILLS, ALL_SKILLS } from "../data/skills";

const fr: ResumeI18n = {
  labels: {
    aboutTitle: "Profil Professionnel",
    aboutContent:
      "Développeur full-stack avec plus de 5 ans d'expérience en entreprise dans les secteurs bancaire et gouvernemental. Auteur d'un framework UI personnalisé déployé sur plus de 600 000 appareils. Expert en React, Angular, Node.js (NestJS), PostgreSQL, Docker et pipelines CI/CD. Courant en anglais, italien, russe et français.",
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
      description: `- Dirigé le développement frontend de logiciels ATM pour une grande banque italienne, déployé en Europe avec Angular, React et NestJS
- Conçu une architecture micro-frontend desservant plus de 600 ATM, réduisant le temps de chargement de 25 %
- Assuré le rôle d'interlocuteur technique principal avec le chef de projet du client, facilitant la communication entre les équipes métier et ingénierie
- Encadré des équipes de 1 à 4 développeurs à travers le cycle SDLC complet : spécifications, planification de sprint et livraison
- Réduit le temps de pipeline CI de 40 % grâce à l'optimisation des processus de build et à la conteneurisation
- Conteneurisé les applications avec Docker et mis en place des pipelines CI/CD Jenkins on-premise
- Réduit les incidents en production de 30 % grâce à des processus rigoureux de test et de revue de code`,
      dates: "Mars 2022 – Présent",
      tags: ["Angular", "React", "NestJS", "Node.js", "Docker", "Jenkins", "CI/CD"],
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
      description: `- Créé des automatisations CRM AS400 et Salesforce pour les activités quotidiennes
- Fourni un support technique pour les systèmes de point de vente et la gestion des stocks
- Animé des visites privées des installations de production pour des clients Forbes 100 en italien, anglais, russe et français
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
  projects: [
    {
      title: "Framework UI pour ATM",
      period: "2024–présent",
      technologies: ["React", "TypeScript", "Vite", "Vitest", "Playwright", "Docker", "Git", "Jenkins"],
      description:
        "Bibliothèque UI personnalisée utilisée par plus de 600 000 appareils. Migration du projet de JSP + JS vers une architecture modulaire TS orientée événements, multi-tenant avec des composants TSX et des hooks de cycle de vie personnalisés.",
    },
    {
      title: "Industrie 4.0",
      period: "2023–2024",
      technologies: ["Angular", "Nest.js", "TypeORM", "PostgreSQL", "TypeScript", "Modbus", "Opcua", "Docker"],
      description:
        "Création de tableaux de bord + analytique intégrant des dispositifs IoT via les protocoles modbus et opcua.",
    },
    {
      title: "Pipeline de Données E-commerce",
      period: "2021-2022",
      technologies: ["Node.js", "MongoDB", "PostgreSQL", "AWS Lambda"],
      description:
        "Outil ETL Node.js + MongoDB convertissant les exports CSV retail en PostgreSQL. Réconciliation automatique quotidienne des stocks pour plus de 50 magasins.",
    },
  ],
  languages: [
    { name: "Anglais", level: "Courant (C2)" },
    { name: "Russe", level: "Langue maternelle" },
    { name: "Italien", level: "Langue maternelle" },
    { name: "Français", level: "Compétence professionnelle (C1)" },
  ],
  skills: SKILLS,
  allSkills: ALL_SKILLS,
};

export default fr;
