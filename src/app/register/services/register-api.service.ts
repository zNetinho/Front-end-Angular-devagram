import { Injectable } from '@angular/core';
import { DevagramApiService } from 'src/app/shared/services/devagram-api.service';
import { Register } from '../types/Register.types';
import { ResponseApi } from 'src/app/shared/types/ResponseApi.types';

@Injectable({
  providedIn: 'root'
})
export class RegisterApiService extends DevagramApiService{

  register(dataRegister: Register): Promise<ResponseApi> {
    return this.post('register', dataRegister)
  }

}
