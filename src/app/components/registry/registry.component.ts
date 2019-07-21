import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../common/models/User';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  user: User = new User();

  constructor(
    private regSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  registryUser() {
    console.log(this.user);
    return this.regSrv.registry(this.user.email, this.user.password)
      .then(res => {
        console.log('BIEN !!!!');
        console.log(res);
        this.router.navigate(['/login']);
      })
      .catch(err => {
        console.log(err);
      });
  }

}
