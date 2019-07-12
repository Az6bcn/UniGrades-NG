import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { DefaultComponent } from './Components/default/default.component';
import { RegisterComponent } from './Components/register/register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavBarComponent, HomeComponent, DefaultComponent, RegisterComponent],
  exports: [NavBarComponent, HomeComponent]
})
export class CoreModule { }