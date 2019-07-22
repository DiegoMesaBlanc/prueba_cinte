import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

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
    private router: Router,
    private flashMess: FlashMessagesService
  ) { }

  ngOnInit() {
    console.log(this.user);
  }

  loginUser() {
    console.log(this.user);
    return this.loginSrv.logIn(this.user.email, this.user.password)
      .then(res => {
        this.flashMess.show('Inicio de sesíon correcto', {cssClass: 'alert-info', timeout: 4000});
        this.router.navigate(['/items']);
      })
      .catch(err => {
        this.flashMess.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
        console.log(err);
      });
  }

  logInGoogle() {
    this.loginSrv.googleLogIn()
      .then(res => {
        this.router.navigate(['/items']);
      });
  }

}
