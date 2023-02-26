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

export interface Result {
  id: number;
  name: string;
  created: string;
  image: string;
}
