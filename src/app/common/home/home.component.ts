import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  isLogin = false;

  constructor(private service: AuthenticationService,
    private router: Router) {
    this.isLogin = service.isLogin;
  }

  ngOnInit() {
  }

  onLogin() {
    this.router.navigate(['login']);
  }

  onPerson() {
    if (!this.isLogin) {
      alert("Please Login First");
    }
    else {
      this.router.navigate(['person']);
    }
  }

  onPet() {
    if (!this.isLogin) {
      alert("Please Login First");
    }
    else {
      this.router.navigate(['pet']);
    }
  }
}
