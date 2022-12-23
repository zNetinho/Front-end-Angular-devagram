import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkedPassword(): ValidatorFn {
  return (fieldForm: AbstractControl): ValidationErrors | null => {
    const form = fieldForm.parent;
    const password = fieldForm?.get('password')?.value

    return console.log
  }
}
