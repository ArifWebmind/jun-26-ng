import { Routes } from '@angular/router';
import { LoginComponent } from './playground/components/auth/login/login.component';
import { RegisterComponent } from './playground/components/auth/register/register.component';
import { ExpensesComponent } from './playground/components/expenses/expenses.component';
import { PageNotFoundComponent } from './playground/components/page-not-found/page-not-found.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseDetailComponent } from './pages/courses/course-detail/course-detail.component';
import { courseResolver } from './playground/resolvers/course.resolver';
import { loginGuard } from './playground/guards/login.guard';
import { exitGuard } from './playground/guards/exit.guard';

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
    canDeactivate: [exitGuard],
  },
  {
    path: 'expenses', // http://localhost:4200/expenses
    component: ExpensesComponent,
  },
  {
    path: 'courses', // http://localhost:4200/course
    component: CoursesComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'courses/:courseId',
    component: CourseDetailComponent,
    resolve: { course: courseResolver },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full',
  },
];
