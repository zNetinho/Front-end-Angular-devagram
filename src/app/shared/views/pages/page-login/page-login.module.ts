import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLoginRoutingModule } from './page-login-routing.module';
import { PageLoginComponent } from './page-login.component';
import { RegisterModule } from 'src/app/register/register.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PageLoginComponent,
  ],
  imports: [
    CommonModule,
    PageLoginRoutingModule,
    RegisterModule,
    SharedModule
  ]
})
export class PageLoginModule { }
