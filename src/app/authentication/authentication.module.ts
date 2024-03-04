import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpassComponent } from './resetpass/resetpass.component';

import {DialogModule} from 'primeng/dialog';
import {SpinnerModule} from 'primeng/spinner';
import {RatingModule} from 'primeng/rating';


@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    DialogModule,
    SpinnerModule,
    RatingModule
  ]
})
export class AuthenticationModule { }
