export interface Project {
  title: string;
  period: string;
  description: string;
  technologies: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "projects.atm.title",
    period: "2023–present",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Vitest",
      "Playwright",
      "Docker",
      "Git",
      "Jenkins",
    ],
    description: "projects.atm.desc",
  },
  {
    title: "projects.iot.title",
    period: "2024–present",
    technologies: [
      "Angular",
      "Nest.js",
      "TypeORM",
      "PostgreSQL",
      "TypeScript",
      "Modbus",
      "Opcua",
      "Docker",
    ],
    description: "projects.iot.desc",
  },
  {
    title: "projects.pipeline.title",
    period: "2021",
    technologies: ["Node.js", "MongoDB", "PostgreSQL", "AWS Lambda"],
    description: "projects.pipeline.desc",
  },
];
