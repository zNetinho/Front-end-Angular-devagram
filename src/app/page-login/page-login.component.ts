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
      image:[null],
      name:['', Validators.required],
      password:['', Validators.required]
    });
  }

  public onChangedImage(): void {
    console.log('Image altered')
  }

  public obtainReference(name: string): AbstractControl {
    return this.form.controls[name];
  }

  onSubmit() {
    console.log('Ola')
  }

  ngOnInit(): void {
  }

}
