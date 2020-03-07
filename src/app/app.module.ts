import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellComponent } from './components/shell/shell.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './components/login.component';
import { DashboardComponent } from './components/dashboard.component';
import { ItemListComponent } from './components/item-list.component';
import { AdminComponent } from './components/admin.component';
import {MatButtonModule} from '@angular/material/button';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    LoginComponent,
    DashboardComponent,
    ItemListComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [AngularFireAuthGuard],
  bootstrap: [ShellComponent]
})
export class AppModule { }
