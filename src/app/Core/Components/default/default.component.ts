import { AuthenticationService } from './../../Services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
    const returnURL = this.activatedRoute.snapshot.queryParams['returnURL'];
    if (returnURL !== undefined) {
      sessionStorage.setItem('returnURL', returnURL);
    }

  }


}
