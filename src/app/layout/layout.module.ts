import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
	FooterComponent,
	NavigationComponent
  ]
})
export class LayoutModule { }
