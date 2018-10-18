import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';
import { AuthenticationModule } from './authentication/authentication.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { environment} from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FavoritesService } from './favorites.service';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    MainModule,
    MatFormFieldModule,
    MatInputModule,
    AuthenticationModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'kboonk'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [ HttpClient, FavoritesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
