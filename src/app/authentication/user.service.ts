import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import * as firebase from 'firebase/app';
import {MusicItem} from '../models/musicItem';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Observable<User>;
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user = this.afAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  getFavoriteAlbums(user) {
    return this.afs.collection(`users/${user.uid}/favoriteAlbums/`).valueChanges();
  }
  getFavoriteSongs(user) {
    return this.afs.collection(`users/${user.uid}/favoriteSongs/`).valueChanges();
  }
  getFavoriteArtists(user) {
    return this.afs.collection(`users/${user.uid}/favoriteArtists/`).valueChanges();
  }
  addFavoriteAlbums(album: MusicItem, user) {
    const userRef: AngularFirestoreCollection<Object> = this.afs.collection(`users/${user.uid}/favoriteAlbums/`);
    console.log('added' + album.album);
    return userRef.add(album as object);
  }
  addFavoriteSong(song: MusicItem, user) {
    const userRef: AngularFirestoreCollection<Object> = this.afs.collection(`users/${user.uid}/favoriteSongs/`);
    console.log('added' + song.track);
    return userRef.add(song as object);
  }
  addFavoriteArtist(artist: MusicItem, user) {
    const userRef: AngularFirestoreCollection<Object> = this.afs.collection(`users/${user.uid}/favoriteArtists/`);
    console.log('added' + artist.artist);
    return userRef.add(artist as object);
  }
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }
  private updateUserData(user) {

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
    };

    return userRef.set(data);
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
