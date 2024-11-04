import { Injectable } from '@angular/core';
import { Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveTemplateGuard  {
  constructor(private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = localStorage.getItem('user');
    if (user == 'template') {
      return true;
    }
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    return false;
  }
}
