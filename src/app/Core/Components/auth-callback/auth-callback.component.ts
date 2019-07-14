import { AuthenticationService } from './../../Services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {
returnURL: string;
  constructor(private authService: AuthenticationService,
              private activatedRoute: ActivatedRoute,
              private notifierService: NotifierService,
              private router: Router) { }

  async ngOnInit() {
    // when route is active, check if the fragment # doesn,t contain error
    if (this.activatedRoute.snapshot.fragment.indexOf('error') >= 0 ) {
        this.notifierService.notify('error', 'Authentication not successful...... Please, try again later');
    }

    // process and complete the authentication by processing what the authServer has come back with
    const user = await this.authService.processAuthServerCallbackResponse();

    if (user && this.authService.thereIsAUserLoggedIn) {
      const returnURL = sessionStorage.getItem('returnURL');
      this.router.navigate([returnURL || '../home']);
      if (returnURL) {
        sessionStorage.removeItem('returnURL');
      }
    }
    else {
      this.router.navigate(['../default']);
    }

  }


}
