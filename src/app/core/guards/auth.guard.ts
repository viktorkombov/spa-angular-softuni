import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let stream$: Observable<IUser | null>;
    if (!this.authService.currentUser) {
      console.log(this.authService.currentUser)
      stream$ = this.authService.getCurrentUserProfile();
    } else {
      stream$ = of(this.authService.currentUser);
    }

    return stream$.pipe(
      map((user) => {
        const isLoggedFromData = childRoute.data.isLogged;
        return typeof isLoggedFromData !== 'boolean' || isLoggedFromData === !!user;
      }),
      tap((canContinue) => {
        if (canContinue) { return; }
        const url = this.router.url;
        this.router.navigateByUrl(url);
      }),
    );
  }

}

