import type {
  ResumeI18n,
  PortfolioI18n,
  NavLabels,
} from "./types";
import { SKILLS, ALL_SKILLS } from "../data/skills";
import { PROJECTS } from "../data/projects";

const fr: ResumeI18n & {
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
    portfolio: "Portfolio",
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
