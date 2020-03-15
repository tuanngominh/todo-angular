import { Injectable } from '@angular/core';
import { Auth } from '../auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from '../user';
import {filter, map} from 'rxjs/operators';
import {auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService implements Auth {
  currentUser$: Observable<User>;
  isAuthenticated$: Observable<boolean>;

  constructor(private af: AngularFireAuth) {
    this.currentUser$ = af.user.pipe(
      filter(user => !!user),
      map(user => ({id: user.uid, name: user.displayName, photoURL: user.photoURL}))
    );

    this.isAuthenticated$ = af.authState.pipe(
      map(user => !!user ? true : false)
    );
  }

  signOut() {
    return this.af.signOut();
  }

  signIn() {
    return this.af.signInWithPopup(new auth.GoogleAuthProvider());
  }
}
