export interface Tree {
  title: string;
  status: string;
  location: string;
  type: Info[];
}

interface Info {
  age: number;
  species: string;
  fruit: string;
}
