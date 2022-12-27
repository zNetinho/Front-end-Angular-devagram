import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { checkedPassword } from '../shared/validators/validatepassword.validator';
import { RegisterApiService } from './services/register-api.service';
import { AuthenticationServiceService } from '../authentication/authentication-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb:FormBuilder, private serviceRegister: RegisterApiService, private authenticationService: AuthenticationServiceService) {
    this.form = this.fb.group({
      file: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      re_password: ['', [Validators.required, checkedPassword()]]
    });
   }

  ngOnInit(): void {
  }

  public obtainReference(fieldName: string): AbstractControl {
    return this.form.controls[fieldName];
  }

  async onSubmit() {
    if(this.form.invalid) {
      console.log('preencha os campos corretamente')
      return console.log('erro nos dados')
    }
     try {
      const valuesForm = this.form.value;
      let bodyRequest = valuesForm

      //se encontrar arquivo no registro cria um FormData.
      if(bodyRequest.file) {
        bodyRequest = new FormData();
        bodyRequest.append('file', valuesForm.file)
        bodyRequest.append('name', valuesForm.name)
        bodyRequest.append('email', valuesForm.email)
        bodyRequest.append('password', valuesForm.password)
      }

      await this.serviceRegister.register(bodyRequest);
      await this.authenticationService.login({
        email: valuesForm.email,
        password:valuesForm.password
      })
      console.log('conta criada com sucesso');
      console.log(valuesForm)
     } catch (e: any) {
      console.log(e)
        const msgError = e?.error?.erro || 'Erro no cadastro'
     }
  }

}
