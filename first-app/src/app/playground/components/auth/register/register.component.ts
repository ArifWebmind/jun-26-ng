import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        email: new FormControl('test@test.com', [
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          RegisterComponent.specialSymbolValidator('!'),
        ]),
        cnfPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
      },
      { validators: RegisterComponent.passwordMatch },
    );
  }

  get email() {
    return this.registerForm.get('email') as FormControl;
  }

  get password() {
    return this.registerForm.get('password') as FormControl;
  }

  get cnfPassword() {
    return this.registerForm.get('cnfPassword') as FormControl;
  }

  onSubmit() {
    console.log(this.registerForm);
  }

  // Filed level Validator - Special Symbol Validator
  static specialSymbolValidator(symbol: string): ValidatorFn {
    return function (control: AbstractControl): ValidationErrors | null {
      const hasSymbol = String(control.value).includes(symbol);
      return hasSymbol ? null : { specialSymbol: true };
    };
  }

  // Cross Field Validator - Password Match Validator
  static passwordMatch(control: AbstractControl): ValidationErrors | null {
    const passwordControl = control.get('password') as FormControl;
    const cnfPasswordControl = control.get('cnfPassword') as FormControl;
    if (passwordControl.value === cnfPasswordControl.value) {
      return null;
    }
    cnfPasswordControl.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  }
}
