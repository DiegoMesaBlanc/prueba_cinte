import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuthModule,
    private authSrv: AuthService,
  ) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return  this.authSrv.afAuth.authState
      .take(1)
      .map(authState => !! authState)
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
      });
  }
}
