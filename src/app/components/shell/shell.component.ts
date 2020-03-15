import {Component, OnInit, ChangeDetectionStrategy, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from '../../auth/auth';
import {filter, tap} from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  template: `
    <app-header
      [user]="auth.currentUser$ | async"
      [isAuthenticated]="auth.isAuthenticated$ | async"
      (signIn)="auth.signIn()"
      (signOut)="onSignOut()"
    ></app-header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {

  constructor(@Inject('Auth') public auth: Auth, public router: Router) { }

  ngOnInit(): void {
    this.handleSignInSuccess();
  }

  handleSignInSuccess() {
    this.auth.isAuthenticated$.pipe(
      filter(isAuthenticated => !!isAuthenticated),
      tap(() => this.router.navigate(['/', 'items'])),
    ).subscribe();
  }

  onSignOut() {
    return this.auth.signOut()
      .then(() => {
        return this.router.navigate(['/', 'signin']);
      });
  }

}
