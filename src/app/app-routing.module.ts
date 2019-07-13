import { AuthCallbackComponent } from './Core/Components/auth-callback/auth-callback.component';
import { DefaultComponent } from './Core/Components/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Core/Components/home/home.component';
import { RegisterComponent } from './Core/Components/register/register.component';
import { SignoutCallbackOidcComponent } from './Core/Components/signout-callback-oidc/signout-callback-oidc.component';


const routes: Routes = [
  {
      path: '',
      component: DefaultComponent
  },
  {   path: 'home',
      component: HomeComponent
  },
  {   path: 'register',
      component: RegisterComponent
  },
  {   path: 'auth-callback',
      component: AuthCallbackComponent
  },
  {   path: 'signout-callback-oidc',
      component: SignoutCallbackOidcComponent
  },
  {   path: 'courses',
      loadChildren: () => import('./Features/subject/subject-routing.module')
                          .then(mod => mod.SubjectRoutingModule)
  },
  {
      path: '**',
      component: HomeComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
