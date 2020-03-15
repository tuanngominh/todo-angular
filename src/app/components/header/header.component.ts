import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../auth/user';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <span>Training Plans. </span>
        <span class="example-spacer"></span>
        <span *ngIf="isAuthenticated">Hello {{user.name}}</span>
        <button mat-button *ngIf="isAuthenticated === false" (click)="signIn.emit()">Sign In</button>
        <button mat-icon-button *ngIf="isAuthenticated">
          <mat-icon class="example-icon" aria-hidden="false" aria-label="Logout" (click)="signOut.emit()">power_settings_new</mat-icon>
        </button>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() user: User;
  @Input() isAuthenticated: boolean;
  @Output() signOut = new EventEmitter<void>();
  @Output() signIn  = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
