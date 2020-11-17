import { Tree } from 'src/app/models/tree.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreeService } from 'src/app/services/tree.service';

@Component({
  selector: 'app-tree-update',
  templateUrl: './tree-update.component.html',
  styleUrls: ['./tree-update.component.css'],
})
export class TreeUpdateComponent implements OnInit {
  treeId: any;
  tree: Tree;
  temperature: number;
  humidity: number;
  title: string;
  age: number;
  species: string;
  fruit: string;
  status: string;
  location: string;

  constructor(private ts: TreeService, private route: ActivatedRoute) {}

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
    this.tree.measurments.humidity = this.humidity;
    this.tree.measurments.temperature = this.temperature;
    console.log(this.tree);
    this.ts.updateTree(this.tree);
  }
}
