import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../common/models/User';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(
    private loginSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginUser() {
    console.log(this.user);
    return this.loginSrv.logIn(this.user.email, this.user.password)
      .then(res => {
        this.router.navigate(['/items']);
      })
      .catch(err => {
        console.log(err);
      });
  }

}
