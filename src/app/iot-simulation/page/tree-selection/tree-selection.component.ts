import { Tree } from './../../../models/tree.model';
import { Component, OnInit } from '@angular/core';
import { TreeService } from 'src/app/services/tree.service';

@Component({
  selector: 'app-tree-selection',
  templateUrl: './tree-selection.component.html',
  styleUrls: ['./tree-selection.component.css'],
})
export class TreeSelectionComponent implements OnInit {
  treeList: Tree[];
  constructor(private ts: TreeService) {}

  ngOnInit(): void {
    this.ts.getTrees().subscribe((data) => {
      this.treeList = data;
      console.log(this.treeList);
    });
  }
}
