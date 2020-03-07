import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shell',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <span>Training Plans..</span>
        <span class="example-spacer"></span>
        <button mat-button [routerLink]="['/', 'signin']">Sign In</button>
        <button mat-icon-button>
            <mat-icon class="example-icon" aria-hidden="false" aria-label="Logout" (click)="logout()">power_settings_new</mat-icon>
        </button>
      </mat-toolbar-row>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {

  constructor(public auth: AngularFireAuth, public router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    return this.auth.signOut()
      .then(() => {
        return this.router.navigate(['/', 'signin']);
      });
  }

}
