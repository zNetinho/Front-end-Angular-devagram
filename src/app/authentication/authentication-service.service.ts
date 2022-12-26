import { Inject, Injectable } from '@angular/core';
import { devagramCredentials } from './types/credentialsDevagram.types';
import { resLogin } from './types/resLogin.types';
import { DevagramApiService } from './../shared/services/devagram-api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DevagramUserService } from '../shared/services/devagram-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService extends DevagramApiService {

  constructor(
      protected _http: HttpClient,
     @Inject('DEVAGRAM_URL_API') private _UrlApi: string,
     private router: Router,
     private userService: DevagramUserService) {
      super(_http, _UrlApi)
      }

  async login(credentials: devagramCredentials): Promise<void>{
    const resLogin: resLogin = await this.post('login', credentials)
      if(!resLogin.token) {
        throw new Error('Login invalid');
      }

      localStorage.setItem('token', resLogin.token);
      localStorage.setItem('name', resLogin.name);
      localStorage.setItem('email', resLogin.email);

      const dataUser = await this.userService.findDataUser();
      localStorage.setItem('id', dataUser._id);

  }

  isLogged(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    this.router.navigateByUrl('/login');
  }

}
