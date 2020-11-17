import { TreeService } from './../../../services/tree.service';
import { Component, OnInit } from '@angular/core';
import { Tree } from 'src/app/models/tree.model';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
})
export class TreeViewComponent implements OnInit {
  trees: Tree[];
  constructor(private ts: TreeService) {}

  ngOnInit(): void {
    this.getTrees();
  }

  getTrees() {
    this.ts.getTrees().subscribe((data) => {
      this.trees = data;
      console.log(this.trees);
    });
  }
}
