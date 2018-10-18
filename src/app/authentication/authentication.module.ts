import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthenticationModule { }
