import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tree, TreeMeasurements, TreeType } from 'src/app/models/tree.model';
import { TreeService } from 'src/app/services/tree.service';

@Component({
  selector: 'app-tree-edit',
  templateUrl: './tree-edit.component.html',
  styleUrls: ['./tree-edit.component.css'],
})
export class TreeEditComponent implements OnInit {
  treeId: any;
  tree: Tree;
  title: string;
  status: string;
  location: string;
  age: number;
  species: string;
  fruit: string;
  temperature: number;
  humidity: number;

  constructor(private route: ActivatedRoute, private ts: TreeService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.treeId = params['id'];
      this.ts.getTree(this.treeId).then((data) => {
        this.tree = data as Tree;
        console.log(this.tree);
        this.assignTreeVariables(this.tree);
      });
    });
  }

  assignTreeVariables(tree: Tree) {
    this.age = tree.type.age;
    this.species = tree.type.species;
    this.fruit = tree.type.fruit;
    this.temperature = tree.measurments.temperature;
    this.humidity = tree.measurments.humidity;
    this.title = tree.title;
    this.status = tree.status;
    this.location = tree.location;
  }

  onSubmit() {
    this.ts.updateTree(this.tree);
  }
}
