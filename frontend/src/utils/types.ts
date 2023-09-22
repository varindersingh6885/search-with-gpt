export type Project = {
  title: string;
  technologies: string;
  skills: ProjectSkills;
};

export type ProjectSkills = {
  frontend: string;
  backend: string;
  infrastructure: string;
  database: string;
};
