import { AbstractControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-public',
  templateUrl: './input-public.component.html',
  styleUrls: ['./input-public.component.scss']
})
export class InputPublicComponent implements OnInit {

  @Input() referenceForm?: AbstractControl;
  @Input() image?: string;
  @Input() type?: string;
  @Input() placeHolder?: string;

  constructor() { }

  ngOnInit(): void {

  }

  public onChanged(event: any): void{
    this.referenceForm?.setValue(event);
    this.referenceForm?.markAsDirty();
  }

  public obtainErrorMessage(): string {
    if(!this.referenceForm?.errors) {
      return '';
    }

    if(this.referenceForm?.errors['required']){
      return 'field  is need';
    }

    if(this.referenceForm?.errors['email']){
      return 'email is not valid';
    }

    if(this.referenceForm?.errors['minlength']){
      return `Minimun caracter is need ${this.referenceForm.errors['minlength'].requiredLength} caracters`;
    }

    if(this.referenceForm?.errors['re_password']){
     return 'Password not combine';
    }

    return '';
  }

}
