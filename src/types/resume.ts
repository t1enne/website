export interface WorkExperience {
  company: string;
  location: string;
  title: string;
  description: string;
  dates: string;
  tags: string[];
}

export interface Education {
  location: string;
  title: string;
  dates: string;
  summary?: string;
  score?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Course {
  provider: string;
  title: string;
  dates: string;
  summary?: string;
}
