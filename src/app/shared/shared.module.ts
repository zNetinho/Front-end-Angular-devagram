import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { InputPublicComponent } from './components/input-public/input-public.component';
import { ButtonPublicComponent } from './components/button-public/button-public.component';
import { PhotoComponent } from './components/photo/photo.component';
import { UploadPhotoComponent } from './components/upload-photo/upload-photo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PagePublicComponent } from './views/pages/page-public/page-public.component';
import { FooterPublicComponent } from './components/footer-public/footer-public.component';
import { PageLoginModule } from '../page-login/page-login.module';
import { RegisterModule } from '../register/register.module';

@NgModule({
  declarations: [
    InputPublicComponent,
    ButtonPublicComponent,
    PhotoComponent,
    UploadPhotoComponent,
    PagePublicComponent,
    FooterPublicComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    InputPublicComponent,
    ButtonPublicComponent,
    PhotoComponent,
    UploadPhotoComponent,
    PagePublicComponent,
    FooterPublicComponent,
  ]
})
export class SharedModule {}
