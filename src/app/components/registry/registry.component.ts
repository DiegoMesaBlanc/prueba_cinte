import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

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
    private router: Router,
    private flashMess: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  registryUser() {
    console.log(this.user);
    return this.regSrv.registry(this.user.email, this.user.password)
      .then(res => {
        this.flashMess.show('Usuario creado correctamente', {cssClass: 'alert-info', timeout: 4000});
        this.router.navigate(['/items']);
      })
      .catch(err => {
        this.flashMess.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
        console.log(err);
      });
  }

}
