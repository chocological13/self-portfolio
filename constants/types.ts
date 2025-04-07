export type ProjectList = {
  title: string;
  description: string;
  tech: string[];
  metrics: string;
  github: string;
  demo?: string;
};

type TechnologyType = {
  name: string;
  level: string;
};

export type TechnologyList = {
  title: string;
  tech: TechnologyType[];
};
