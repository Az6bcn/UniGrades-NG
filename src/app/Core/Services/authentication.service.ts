import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserManager, User } from 'oidc-client';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // tslint:disable-next-line:variable-name
  private _usermanager = new UserManager(environment.oidcClientSettings);
  private user: User;

  private isLoggedIn = new Subject<boolean>();

  isLoggedIn$ = this.isLoggedIn.asObservable();
  returnUrlSubject = new BehaviorSubject<string>('xxx');

  constructor(private jwtHelperService: JwtHelperService) { }

  async logIn() {
    await this._usermanager.signinRedirect();
  }

  /**
   * Process response from the authorization endpoint. i.e receives and handles incoming tokens,
   * including token validation. At this point, we've effectively closed the loop and completed
   * the authentication process. We now have information about the authenticated User.
   */
  async processAuthServerCallbackResponse() {
    this.user = await this._usermanager.signinRedirectCallback();

    if (this.user) {
      const { access_token } = this.user;
      localStorage.setItem('token', access_token);
      this.isLoggedIn.next(true);
    }
    return this.user;
  }

  logOut() {
    this._usermanager.signoutRedirect();

    localStorage.removeItem('token');
  }

  async processAuthServerLogOutCallbackResponse() {
    await this._usermanager.signoutRedirectCallback();
    localStorage.removeItem('token');
  }
  thereIsAUserLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return !this.jwtHelperService.isTokenExpired(token);
  }

}
