export interface ResponseAPI {
  info: Info;
  results: Result[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

type Location = {
  name: string;
  url: string;
};

export interface Result {
  id: number;
  name: string;
  created: string;
  image?: string;
  status?: string;
  species?: string;
  location?: Location;
  air_date?: string;
  characters?: string[];
  episode?: string;
  url?: string;
  dimension?: string;
  residents?: string[];
  type?: string;
}

export interface navLink {
  text: string;
  path: string;
}
