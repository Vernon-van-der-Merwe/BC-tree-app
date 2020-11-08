export interface Tree {
  title: string;
  status: string;
  location: string;
  measurments: TreeMeasurements;
  type: TreeType;
}

interface TreeType {
  age: number;
  species: string;
  fruit: string;
}

interface TreeMeasurements {
  humidity: number;
  heat: number;
}
