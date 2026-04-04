export interface SkillCategory {
  category: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Angular",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "NestJS", "Python", "Rust", "Go", "F#"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    category: "DevOps & Tools",
    skills: [
      "Docker",
      "Jenkins",
      "Vite",
      "Webpack",
      "Bash",
      "CI/CD",
      "Git",
      "Linux",
      "AWS",
    ],
  },
  {
    category: "Testing",
    skills: [
      "Jest",
      "Cypress",
      "Playwright",
      "Vitest",
      "Unit Testing",
      "E2E Testing",
    ],
  },
  {
    category: "Other",
    skills: [
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Agile/Scrum",
      "Jira",
      "AS400",
      "Salesforce",
    ],
  },
];

// Flat list for ATS keyword scanning
export const ALL_SKILLS = SKILLS.flatMap((cat) => cat.skills);
