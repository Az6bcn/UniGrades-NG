import { AboutComponent } from './about/about.component';
import { AuthCallbackComponent } from './Core/Components/auth-callback/auth-callback.component';
import { DefaultComponent } from './Core/Components/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Core/Components/home/home.component';
import { RegisterComponent } from './Core/Components/register/register.component';
import { SignoutCallbackOidcComponent } from './Core/Components/signout-callback-oidc/signout-callback-oidc.component';
import { AuthGuard } from './Core/Guards/auth.guard';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
      path: '',
      component: DefaultComponent
  },
  {   path: 'home',
      component: HomeComponent,
      canActivate: [AuthGuard]
  },
  {   path: 'register',
      component: RegisterComponent
  },
  {   path: 'contact',
      component: ContactComponent
  },
  {   path: 'about',
      component: AboutComponent
  },
  {   path: 'auth-callback',
      component: AuthCallbackComponent
  },
  {   path: 'signout-callback-oidc',
      component: SignoutCallbackOidcComponent
  },
  {   path: 'courses',
      loadChildren: () => import('./Features/subject/subject.module')
                          .then(mod => mod.SubjectModule),
      canActivate: [AuthGuard]
  },
  {
      path: '**',
      component: DefaultComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
