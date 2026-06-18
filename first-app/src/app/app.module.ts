import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './playground/components/users/users.component';
import { UserImageComponent } from './playground/components/users/user-image/user-image.component';
import { UserInfoComponent } from './playground/components/users/user-info/user-info.component';
import { CardComponent } from './playground/ui/card/card.component';
import { LifeCycleComponent } from './playground/components/life-cycle/life-cycle.component';
import { DirectiveDemoComponent } from './playground/components/directive-demo/directive-demo.component';
import { HighlightDirective } from './playground/directives/highlight.directive';
import { PipeDemoComponent } from './playground/components/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './playground/pipes/country-code.pipe';
import { ReversePipe } from './playground/pipes/reverse.pipe';
import { FilterPipe } from './playground/pipes/filter.pipe';
import { SortPipe } from './playground/pipes/sort.pipe';
import { LoginComponent } from './playground/components/auth/login/login.component';
import { ForbiddenPasswordDirective } from './playground/directives/forbidden-password.directive';
import { RegisterComponent } from './playground/components/auth/register/register.component';
import { CompAComponent } from './playground/components/counter/comp-a/comp-a.component';
import { CompBComponent } from './playground/components/counter/comp-b/comp-b.component';
import { CounterService } from './playground/services/counter.service';
import { ObservableDemoComponent } from './playground/components/observable-demo/observable-demo.component';
import { ExpensesComponent } from './playground/components/expenses/expenses.component';
import { ExpenseItemComponent } from './playground/components/expenses/expense-item/expense-item.component';
import { ExpenseFormComponent } from './playground/components/expenses/expense-form/expense-form.component';
import { PageNotFoundComponent } from './playground/components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { MainNavigationComponent } from './playground/layout/main-navigation/main-navigation.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseDetailComponent } from './pages/courses/course-detail/course-detail.component';

@NgModule({
  declarations: [
    // Component, Directives, Pipes
    AppComponent,
    UsersComponent,
    UserImageComponent,
    UserInfoComponent,
    CardComponent,
    LifeCycleComponent,
    DirectiveDemoComponent,
    HighlightDirective,
    PipeDemoComponent,
    CountryCodePipe,
    ReversePipe,
    FilterPipe,
    SortPipe,
    LoginComponent,
    ForbiddenPasswordDirective,
    RegisterComponent,
    CompAComponent,
    CompBComponent,
    ObservableDemoComponent,
    ExpensesComponent,
    ExpenseItemComponent,
    ExpenseFormComponent,
    PageNotFoundComponent,
    MainNavigationComponent,
    CoursesComponent,
    CourseDetailComponent,
  ],
  imports: [
    // Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  // providers: [CounterService], // Services
  bootstrap: [AppComponent],
})
export class AppModule {}
