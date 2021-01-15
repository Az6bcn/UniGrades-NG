import { AuthenticationService } from './../../Services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isCollapsed = true;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {

  }

  isLoggedIn(): boolean {
    return this.authService.thereIsAUserLoggedIn();
  }
}
