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
  image: string;
  status: string;
  species: string;
  location: Location;
}
