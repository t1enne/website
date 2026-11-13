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
    jobTitle: "Développeur Full Stack Senior orienté Frontend",
    aboutTitle: "Profil Professionnel",
    aboutContent:
      "Développeur full stack orienté frontend, plus de cinq ans à livrer des logiciels de bout en bout. J'ai travaillé sur un framework UI utilisé sur 600 000+ distributeurs automatiques d'une banque européenne, et publié le moteur de formulaires open source FormBaker et une bibliothèque de backtesting quantitatif. Au quotidien : TypeScript, React, Angular, Node, Python, Docker et Linux. J'encadre des juniors et m'appuie sur des workflows assistés par l'IA : mon quotidien passe par le pi coding agent, avec des skills et des workflows d'agents scriptés. Je parle français, italien, anglais et russe. Je préfère les solutions simples, qui durent.",
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
      title: "Développeur Full Stack Senior",
      description: `
- Développement full stack orienté frontend en TypeScript et Node, de l'interface aux services
- Encadrement de 3 développeurs juniors : onboarding, revue de code et pair programming
- Temps de build de la CI ramenés d'environ 3 minutes à environ 30 secondes, pipeline assainie
- Conteneurisation Docker et mise en place de la pipeline Jenkins CI/CD on-premise
- Workflows de développement assistés par l'IA avec le pi coding agent : skills personnalisés et workflows d'agents scriptés, partagés dans mes dotfiles (github.com/t1enne/dotfiles)
- Architecture frontend sur site pour un client bancaire (voir ci-dessous)`,
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
      description: `- Développement frontend du logiciel ATM d'une banque européenne, 600 000+ distributeurs
- Interface JSP remplacée par une architecture événementielle en TypeScript
- Widgets et services sur mesure, appelables depuis un DSL basé sur JSON
- Intégration avec la couche KAL des ATM
- Bundle et processus de build dédiés, compatibilité IE et exigences de sécurité de la banque`,
      dates: "Mars 2022 – Janv. 2024",
      tags: ["TypeScript", "Angular", "Build Tooling", "DSL"],
    },
    {
      company: "Cortek",
      location: "Pérouse, Italie",
      title: "Développeur Full Stack",
      description: `- Gestion de l'infrastructure e-commerce, surtout sur Shopify
- Outils Node.js et Next.js pour les opérations quotidiennes, dont les migrations CSV vers SQL
- App frontend pour les boutiques, intégrées en temps réel aux systèmes de caisse
- Stratégie de contenus pour les marketplaces Amazon et Meta
- Pipelines ETL automatisées pour faire passer les données des boutiques de CSV vers PostgreSQL`,
      dates: "Janv. 2020 – Févr. 2022",
      tags: ["Node.js", "Next.js", "React", "PostgreSQL", "MongoDB", "AWS"],
    },
    {
      company: "Brunello Cucinelli",
      location: "Solomeo, Italie",
      title: "Coordinateur de Boutique et Spécialiste CRM",
      description: `- Passage au développement en autodidacte, en automatisant la boutique avec des scripts
- Automatisations CRM sur AS400 et Salesforce pour le travail quotidien
- Support des systèmes de caisse et de la gestion des stocks
- Visites guidées des ateliers en italien, anglais, russe et français
- Merchandising visuel et coordination des réapprovisionnements avec le responsable
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
      jobTitle: "Développeur Full Stack Senior orienté Frontend",
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
