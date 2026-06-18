import { CanDeactivateFn } from '@angular/router';
import { RegisterComponent } from '../components/auth/register/register.component';

export const exitGuard: CanDeactivateFn<RegisterComponent> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  return component.shouldExit();
};
