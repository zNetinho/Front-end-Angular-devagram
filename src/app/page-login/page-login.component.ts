import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public onChangedImage(): void {
    console.log('Image altered')
  }

  onSubmit() {
    console.log('Ola')
  }

  ngOnInit(): void {
  }

  public obtainReference(fieldName: string): AbstractControl {
    return this.form.controls[fieldName];
  }

}
