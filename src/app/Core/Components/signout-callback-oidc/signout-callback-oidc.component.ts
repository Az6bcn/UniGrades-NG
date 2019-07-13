import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'app-signout-callback-oidc',
  templateUrl: './signout-callback-oidc.component.html',
  styleUrls: ['./signout-callback-oidc.component.css']
})
export class SignoutCallbackOidcComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

      this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

}
