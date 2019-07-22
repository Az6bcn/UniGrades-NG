import { AuthenticationService } from './../Services/authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService,
              private router: Router,
              private notifierService: NotifierService) { }
  canActivate(activatedRoute: ActivatedRouteSnapshot,
              routerState: RouterStateSnapshot): boolean {

    const returnURL = routerState.url;

    if (this.authService.thereIsAUserLoggedIn()) {
      return true;
    }

    this.notifierService.notify('error', 'You need to be logged in to access this area');
    this.router.navigate(['../'], { queryParams: { returnURL } });
    return false;
  }

  canActivateChild(activatedRoute: ActivatedRouteSnapshot,
                   routerState: RouterStateSnapshot): boolean {

    const returnURL = routerState.url;

    if (this.authService.thereIsAUserLoggedIn()) {
      return true;
    }

    this.notifierService.notify('error', 'You need to be logged in to access this area');
    this.router.navigate(['../'], { queryParams: { returnURL } });
    return false;
  }
}
