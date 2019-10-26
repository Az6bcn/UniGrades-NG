import { UserService } from './../../Services/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from './../../Services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/Models/AppUser';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              private userService: UserService) { }

  ngOnInit() {
  }

  logIn() {
    this.authService.logIn();
  }

  logOut() {
    this.authService.logOut();
  }

  isLoggedIn(): boolean {
    return this.authService.thereIsAUserLoggedIn();
  }

  getLoggedInUser(): AppUser | null {
    return this.userService.currentUser();
  }

  register() {

  }
}
