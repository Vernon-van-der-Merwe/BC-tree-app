import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentReference,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Tree } from '../models/Tree.model';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  private TreesCollection: AngularFirestoreCollection<Tree>;
  private TreesDoc: AngularFirestoreDocument<Tree>;
  private Trees: Observable<Tree[]>;
  private Tree: Observable<Tree>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.TreesCollection = this.afs.collection('Trees', (ref) =>
      ref.orderBy('title', 'asc')
    );
    this.Trees = this.TreesCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Tree;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  getTrees(): Observable<Tree[]> {
    return this.Trees;
  }

  getTree(id) {
    return new Promise((resolve, reject) => {
      this.afs
        .doc(`Trees/${id}`)
        .snapshotChanges()
        .subscribe((response) => {
          resolve(response.payload.data() as Tree);
        });
    });
  }

  insertTree(Tree): Promise<DocumentReference> {
    return this.afs.collection('Trees').add(Tree);
  }

  removeTree(id: string): Promise<any> {
    this.TreesDoc = this.afs.doc(`Trees/${id}`);
    return this.TreesDoc.delete();
  }
  updateTree(Tree): Promise<any> {
    this.TreesDoc = this.afs.doc(`Trees/${Tree.id}`);
    return this.TreesDoc.update(Tree);
  }
}
