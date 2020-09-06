import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { StoreComponent } from './store/store.component';

@Injectable({
  providedIn: 'root'
})
export class StoreFirstGuard implements CanActivate {
  private firstNavigation = true;

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    let result = true;
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component !== StoreComponent) {
        // this.router.navigateByUrl('/');
        // result = false;
      }
    }
    return result;
  }
}
