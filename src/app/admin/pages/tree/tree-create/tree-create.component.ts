import {
  Tree,
  TreeType,
  TreeMeasurements,
} from './../../../../models/tree.model';
import { Component, OnInit } from '@angular/core';
import { TreeService } from 'src/app/services/tree.service';

@Component({
  selector: 'app-tree-create',
  templateUrl: './tree-create.component.html',
  styleUrls: ['./tree-create.component.css'],
})
export class TreeCreateComponent implements OnInit {
  title: string;
  status: string;
  location: string;
  age: number;
  species: string;
  fruit: string;
  temperature: number;
  humidity: number;

  constructor(private ts: TreeService) {}

  ngOnInit(): void {}

  onSubmit() {
    const treeType: TreeType = {
      age: this.age,
      species: this.species,
      fruit: this.fruit,
    };
    const treeMeasurements: TreeMeasurements = {
      temperature: this.temperature,
      humidity: this.humidity,
    };
    const tree: Tree = {
      title: this.title,
      status: this.status,
      location: this.location,
      measurments: treeMeasurements,
      type: treeType,
    };
    console.log(tree);

    if (
      treeType.age === undefined ||
      treeType.species === undefined ||
      treeType.fruit === undefined ||
      treeMeasurements.temperature === undefined ||
      treeMeasurements.humidity === undefined ||
      tree.title === undefined ||
      tree.location === undefined
    ) {
      alert('Please enter a value into the fields');
    } else {
      this.ts
        .insertTree(tree)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          alert(err);
          console.log(err);
        })
        .finally(() => {
          alert('Tree has been added');
        });
    }
  }
}
