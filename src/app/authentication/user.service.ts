import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import * as firebase from 'firebase/app';
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
  login(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
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
      // favoriteAlbums: user.favoriteAlbums,
      // favoriteSongs: user.favoriteSongs,
      // favoriteArtists: user.favoriteArtists
    };

    return userRef.set(data, {merge: true});
  }
  logout(){
    this.afAuth.auth.signOut();
  }
}
