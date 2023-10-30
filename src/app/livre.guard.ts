//import { CanActivateFn } from '@angular/router';

/*export const livreGuard: CanActivateFn = (route, state) => {
  return true;
};*/
import { Injectable } from '@angular/core';
import { CanLoad, Router, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class livreGuard implements CanActivate {
  constructor (private authService: AuthService,
  private router : Router) {}
  canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {
  if (this.authService.isAdmin())
  return true;
  else
  {
  this.router.navigate(['app-forbidden']);
  return false;
  }
  }
}
