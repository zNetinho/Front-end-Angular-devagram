import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevagramApiService {

  constructor(protected http: HttpClient,
              @Inject('DEVAGRAM_URL_API') private UrlApi: string) { }

  public post(url: string, body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(
        this.getUrl(url),
        body
      ).subscribe({
        next: v => resolve(v),
        error: e => reject(e)
      })
    })
  }

  private getUrl(url: string): string {
    return `${this.UrlApi}/${url}`
  }

  public get(url: string): Promise<any> {
    return new Promise((resolve, reject)=> {
      this.http.get(
        this.getUrl(url)
      ).subscribe({
        next: v => resolve(v),
        error: e => reject(e)
      });
    })
  }

}
