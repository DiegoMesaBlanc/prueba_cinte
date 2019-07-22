import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  registry(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => {
          resolve(userData);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  logIn(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => {
          resolve(userData);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  googleLogIn() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  logOut() {
    return this.afAuth.auth.signOut();
  }
}
