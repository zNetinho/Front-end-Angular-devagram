import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPublicComponent } from './components/input-public/input-public.component';
import { ButtonPublicComponent } from './components/button-public/button-public.component';
import { PhotoComponent } from './components/photo/photo.component';
import { UploadPhotoComponent } from './components/upload-photo/upload-photo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PagePublicComponent } from './components/views/page-public/page-public.component';

@NgModule({
  declarations: [
    InputPublicComponent,
    ButtonPublicComponent,
    PhotoComponent,
    UploadPhotoComponent,
    PagePublicComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
  ]
})
export class SharedModule { }
