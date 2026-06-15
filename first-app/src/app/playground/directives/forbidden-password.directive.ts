import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appForbiddenPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenPasswordDirective,
      multi: true,
    },
  ],
})
export class ForbiddenPasswordDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    const passwordValue = control.value;
    const forbiddenPassword = /password|pwd123/.test(passwordValue);
    return forbiddenPassword ? { forbiddenPassword: true } : null;
  }
}
