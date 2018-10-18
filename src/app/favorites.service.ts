import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Favorite } from './models/favorite';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FavoritesService {
  favoritesCollectiion: AngularFirestoreCollection<Favorite>;
  favorites: Observable<Favorite[]>;
  constructor(public afs: AngularFirestore) {
    // this.favorites = this.afs.collection('items').valueChanges();
    this.favorites = this.afs.collection('items').snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Favorite;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }
  getFavorites() {
    return this.favorites;
  }
}
