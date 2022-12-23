import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLoginRoutingModule } from './page-login-routing.module';
import { PageLoginComponent } from './page-login.component';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PageLoginComponent,
  ],
  imports: [
    CommonModule,
    PageLoginRoutingModule,
    SharedModule
  ]
})
export class PageLoginModule { }
