import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { AppUser } from 'src/app/Models/AppUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthenticationService,
              private jwtHelprService: JwtHelperService) { }

  isLoggedIn(): boolean {
  return this.authService.thereIsAUserLoggedIn();
}


  currentUser(): AppUser | null {
    if (this.isLoggedIn()) {
      const token = localStorage.getItem('token');
      const decodedToken = this.jwtHelprService.decodeToken(token);

      return new AppUser(decodedToken.sub, decodedToken.name, decodedToken.email);
    }
    return null;
  }

}
