export type ProjectCategory = 'AI Systems' | 'Web & Apps' | 'Design' | 'Video & Motion';
export type Category = 'All' | ProjectCategory;

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDesc: string;
  problem: string;
  solution: string;
  outcome: string;
  stack: string[];
}
