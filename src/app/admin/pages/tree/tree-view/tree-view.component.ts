import { Tree } from './../../../../models/tree.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreeService } from 'src/app/services/tree.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
})
export class TreeViewComponent implements OnInit {
  treeId: any;
  tree: Tree;
  constructor(private ts: TreeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.treeId = params['id'];
      this.ts.getTrees().subscribe((data) => {
        data.forEach((tree) => {
          if (tree.id === this.treeId) {
            this.tree = tree;
          }
        });
      });
    });
  }
}
