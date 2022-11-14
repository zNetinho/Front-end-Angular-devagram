import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPublicComponent } from './components/input-public/input-public.component';
import { ButtonPublicComponent } from './components/button-public/button-public.component';
import { PageLoginComponent } from './views/page-login/page-login.component';
import { PhotoComponent } from './components/photo/photo.component';



@NgModule({
  declarations: [
    InputPublicComponent,
    ButtonPublicComponent,
    PageLoginComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageLoginComponent
  ]
})
export class SharedModule { }
