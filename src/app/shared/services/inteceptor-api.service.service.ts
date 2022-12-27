import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//intercepta e reescreve a requisição
export class InteceptorApiService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    let newReq = req;
    //Se capturar o token ele sobrescreve a requisição.
    if (token) {
      console.log('chegou na verificação')
      newReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      })
    }
    //envia requisição modificada ou não
    return next.handle(newReq);
  }

  // constructor() { }
}
