import { Routes } from '@angular/router';
import { LoginComponent } from './playground/components/auth/login/login.component';
import { RegisterComponent } from './playground/components/auth/register/register.component';
import { ExpensesComponent } from './playground/components/expenses/expenses.component';
import { PageNotFoundComponent } from './playground/components/page-not-found/page-not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '', // http://localhost:4200
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login', // http://localhost:4200/login
    component: LoginComponent,
  },
  {
    path: 'register', // http://localhost:4200/register
    component: RegisterComponent,
  },
  {
    path: 'expenses', // http://localhost:4200/expenses
    component: ExpensesComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full',
  },
];
