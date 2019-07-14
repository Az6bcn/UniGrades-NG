import { CoreModule } from './Core/Core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotifierModule } from 'angular-notifier';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { SubjectModule } from './Features/subject/subject.module';

export function tokenGetter() {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotifierModule, // angular notifier
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [environment.baseURL, environment.authBaseURL],
        skipWhenExpired: true,
        throwNoTokenError: true
      }
    }),
    CoreModule, // Core Module,
    SubjectModule  // FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
