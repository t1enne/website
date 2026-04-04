export interface Course {
  title: string;
  provider: string;
  dates: string;
}

export const COURSES: Course[] = [
  {
    provider: 'UC Santa Cruz',
    title: 'Data Structures & Algorithms in C/C++',
    dates: 'Jul 2024'
  },
  {
    provider: 'Duke University',
    title: 'Python and Rust with Linux CLI Tools',
    dates: 'Mar 2024'
  },
  {
    provider: 'Duke University',
    title: 'Rust Fundamentals',
    dates: 'Jan 2024'
  }
];
