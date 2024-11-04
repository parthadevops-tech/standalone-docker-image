import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminrouteguardGuard  {
  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = localStorage.getItem('user');
    if (user == 'admin') {
      return true;
    }
    this._router.navigate(['login']);
    return false;
  }
}

// FUNCTIONAL ROUTE GUARDS STARTS FROM HERE <----

// export const adminRouteGuard = () =>{
//   const _router = inject(Router);
//   const  user = sessionStorage.getItem('user');
//       if(user == 'admin' || user == 'hradmin'){
//         return true;
//       }
//       _router.navigate(['login']);
//       return false;
// }
