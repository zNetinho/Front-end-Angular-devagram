import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageLoginModule } from './page-login/page-login.module';
import { RegisterModule } from './register/register.module';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InteceptorApiService } from './shared/services/inteceptor-api.service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PageLoginModule,
    RegisterModule
  ],
  providers: [
    {
      provide: 'DEVAGRAM_URL_API',
      useValue: environment.apiUrl
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass: InteceptorApiService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
