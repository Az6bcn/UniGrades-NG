import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { DefaultComponent } from './Components/default/default.component';
import { RegisterComponent } from './Components/register/register.component';
import { LogInComponent } from './Components/log-in-out/log-in.component';
import { AuthCallbackComponent } from './Components/auth-callback/auth-callback.component';
import { SignoutCallbackOidcComponent } from './Components/signout-callback-oidc/signout-callback-oidc.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavBarComponent, HomeComponent, DefaultComponent, RegisterComponent, LogInComponent, AuthCallbackComponent, SignoutCallbackOidcComponent],
  exports: [NavBarComponent, HomeComponent]
})
export class CoreModule { }
