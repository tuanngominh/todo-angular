import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <span>Training Plans</span>
        <span class="example-spacer"></span>
        <mat-icon class="example-icon" aria-hidden="false" aria-label="Add Todo">add_box</mat-icon>
        <mat-icon class="example-icon" aria-hidden="false" aria-label="Logout">power_settings_new</mat-icon>
      </mat-toolbar-row>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
