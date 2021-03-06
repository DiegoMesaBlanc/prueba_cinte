import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin = false;
  name: any;
  email: any;
  foto: any;

  constructor(
    private authSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authSrv.getAuth().subscribe(auth => {
      if (auth) {
        console.log(auth);
        this.isLogin = true;
        this.name = auth.displayName;
        this.email = auth.email;
      } else {
        this.isLogin = false;
      }
    });
  }

  logout() {
    this.authSrv.logOut();
  }

}
