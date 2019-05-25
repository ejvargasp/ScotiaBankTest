import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { UserEditionComponent } from './user-creation/user-edition/user-edition.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { AccountCreationComponent } from './user-creation/account-creation/account-creation.component';
import { OperationsComponent } from './user-menu/operation/operation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserCreationComponent,
    UserEditionComponent,
    UserMenuComponent,
    AccountCreationComponent,
    OperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
