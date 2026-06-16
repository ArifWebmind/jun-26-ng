import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
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

  paymentMethods = ['card', 'upi', 'cod'];

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
        hobbies: this.fb.array([]),
        method: new FormControl(),
        acceptedTerms: new FormControl(false, Validators.requiredTrue),
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

  get hobbies() {
    return this.registerForm.get('hobbies') as FormArray;
  }

  get method() {
    return this.registerForm.get('method') as FormControl;
  }

  get acceptedTerms() {
    return this.registerForm.get('acceptedTerms') as FormControl;
  }

  onAddHobby() {
    this.hobbies.push(
      this.fb.group({
        name: new FormControl('', Validators.required),
        freq: new FormControl('', Validators.required),
      }),
    );
  }

  onDeleteHobby(i: number) {
    this.hobbies.removeAt(i);
  }

  onSubmit() {
    console.log(this.registerForm);
  }

  // Field level Validator - Special Symbol Validator
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
