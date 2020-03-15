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
import { HeaderComponent } from './components/header/header.component';
import {FirebaseAuthService} from './auth/firebase-auth/firebase-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    LoginComponent,
    DashboardComponent,
    ItemListComponent,
    AdminComponent,
    HeaderComponent
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
  providers: [
    AngularFireAuthGuard,
    {provide: 'Auth', useClass: FirebaseAuthService}
  ],
  bootstrap: [ShellComponent]
})
export class AppModule { }
