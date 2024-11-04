import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Iemployee } from '../model/employee';
import { DomSanitizer } from '@angular/platform-browser';

const posts = 'https://jsonplaceholder.typicode.com/posts?userId=5';
const albums = 'https://jsonplaceholder.typicode.com/albums?userId=3';
const apiUrl = 'https://api.angularbootcamp.com/employees';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public userSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  private userLoggedIn = new Subject<boolean>();

  constructor(private _http: HttpClient, private sanitizer: DomSanitizer) {
    this.userLoggedIn.next(false);
  }

  getAllEmpoyees(): Observable<Iemployee[]> {
    return this._http.get<Iemployee[]>(apiUrl);
  }

  getUser(user: string) {
    console.log(user);
    this.userSubject$.next(user);
  }

  // Prevent cross-site scripting (XSS)

  getSafeHtml(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  getsafeURL(URL: string) {
    return this.sanitizer.bypassSecurityTrustUrl(URL);
  }
  getsafeResoueceURL(URL: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(URL);
  }

  getDataFromApi1(): Observable<any> {
    return this._http.get(posts);
  }

  getDataFromApi2(): Observable<any> {
    return this._http.get(albums);
  }

  setUserLoggedIn(userLoggedIn: boolean) {
    this.userLoggedIn.next(userLoggedIn);
  }

  getUserLoggedIn(): Observable<boolean> {
    return this.userLoggedIn.asObservable();
  }
}
