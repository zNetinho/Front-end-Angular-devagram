import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkedPassword(): ValidatorFn {
  return (fieldForm: AbstractControl): ValidationErrors | null => {
    const form = fieldForm.parent;
    const password = form?.get('password')?.value
    const re_password = form?.get('re_password')?.value

    return password === re_password ? null : {
      re_password: true
    }
  }
}
