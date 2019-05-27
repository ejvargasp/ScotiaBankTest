import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { UserEditionComponent } from './user-creation/user-edition/user-edition.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { OperationsComponent } from './user-menu/operation/operation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserCreationComponent,
    UserEditionComponent,
    UserMenuComponent,
    OperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
