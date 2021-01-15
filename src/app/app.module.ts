import { CoreModule } from './Core/Core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotifierModule } from 'angular-notifier';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { SubjectModule } from './Features/subject/subject.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';


// TODO Remove code block:angular-notifier was throwing, Generic type 'ModuleWithProviders<T>' requires 1 type argument(s)
// and failing in pipeline.
declare module '@angular/core' {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}


export function tokenGetter() {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NotifierModule, // angular notifier // TODO Remove Angular-Notifier, not compatible with >v7
    JwtModule.forRoot({
      config: {
        tokenGetter,
        skipWhenExpired: true,
        throwNoTokenError: true,
        headerName: 'Authorization',
        authScheme: 'Bearer '
      }
    }),
    CoreModule, // Core Module,
    SubjectModule,  // FeatureModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
