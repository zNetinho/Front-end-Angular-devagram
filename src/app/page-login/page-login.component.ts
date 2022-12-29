import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthenticationServiceService } from '../shared/authentication/authentication-service.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationServiceService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public onChangedImage(): void {
    console.log('Image altered');
  }

  //Futura implementações
  //-Forçar login
  //-Verificar login ativo
  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      console.log('preencha os dados corretamente');
    }
    try {
      await this.authenticationService.login(this.form.value);
    } catch (e: any) {
      console.log(e);
      const msgError = e?.error.erro || 'Erro no login';
    }
  }

  ngOnInit(): void {}

  public obtainReference(fieldName: string): AbstractControl {
    return this.form.controls[fieldName];
  }
}
