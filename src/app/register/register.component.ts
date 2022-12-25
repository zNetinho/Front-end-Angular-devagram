import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { checkedPassword } from '../shared/validators/validatepassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      file: [null],
      user: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      re_password: ['', [Validators.required, checkedPassword()]]
    });
   }

  ngOnInit(): void {
  }

  public obtainReference(fieldName: string): AbstractControl {
    return this.form.controls[fieldName];
  }

  onSubmit() {
    console.log('Ola')
  }

}
