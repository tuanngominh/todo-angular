import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';

@Component({
  selector: 'app-login',
  template: `
    <h1>Welcome to My Awesome App</h1>
    <button mat-button (click)="login()">Login</button>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(public fireAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  login() {
    return this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}
