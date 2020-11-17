import { Tree } from './../../../../models/tree.model';
import { Component, OnInit } from '@angular/core';
import { TreeService } from 'src/app/services/tree.service';

@Component({
  selector: 'app-tree-home',
  templateUrl: './tree-home.component.html',
  styleUrls: ['./tree-home.component.sass'],
})
export class TreeHomeComponent implements OnInit {
  treesList: Tree[];
  constructor(private ts: TreeService) {}

  ngOnInit(): void {
    this.ts.getTrees().subscribe((data) => {
      this.treesList = data;
    });
  }
}
