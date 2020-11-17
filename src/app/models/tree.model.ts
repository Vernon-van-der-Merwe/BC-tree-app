export interface Tree {
  id?: string;
  title: string;
  status: string;
  location: string;
  measurments: TreeMeasurements;
  type: TreeType;
}

export interface TreeType {
  age: number;
  species: string;
  fruit: string;
}

export interface TreeMeasurements {
  humidity: number;
  temperature: number;
}
