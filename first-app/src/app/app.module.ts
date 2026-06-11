import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './playground/components/users/users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // Component, Directives, Pipes
    AppComponent,
    UsersComponent,
  ],
  imports: [
    // Modules
    BrowserModule,
    FormsModule,
  ],
  providers: [], // Services
  bootstrap: [AppComponent],
})
export class AppModule {}
