import { Injectable } from '@angular/core';
import { DevagramApiService } from './devagram-api.service';
import { userDevagram } from '../types/userDevagram.types';

@Injectable({
  providedIn: 'root'
})
export class DevagramUserService extends DevagramApiService {

    findDataUser(): Promise<userDevagram> {
      return this.get('user')
    }

    searchUsers(nameFind: string): Promise<Array<userDevagram>> {
      return this.get('search?name=' + nameFind)
    }

}
