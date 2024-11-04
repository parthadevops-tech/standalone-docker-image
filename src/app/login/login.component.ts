import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../httpServ/employee.service';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  combinedData = {};
  constructor(
    public router: Router,
    private service: EmployeeService,
    private cd: ChangeDetectorRef,
    private http: HttpClient
  ) {}

  ngOnInit() {
    sessionStorage.clear();
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/16')
      .pipe(
        mergeMap((res: any) =>
          this.http.get(
            'https://jsonplaceholder.typicode.com/users/' + res.userId
          )
        )
      )
      .pipe(
        mergeMap((res: any) =>
          this.http.get('https://jsonplaceholder.typicode.com/todos/' + res.id)
        )
      )
      .subscribe((authorDetails: any) => {
        console.log(authorDetails);
        console.log("$############## Wel come to login repo $####################");
      });

    this.service
      .getDataFromApi1()
      .pipe(
        mergeMap((data1) => {
          return this.service.getDataFromApi2();
        })
      )
      .subscribe((data2) => {
        this.combinedData = {
          // You can structure the combined data as needed
          //api1Data: data1,
          api2Data: data2,
        };
      });
  }
  handleLoginClick() {
    if (this.username && this.password) {
      this.authenticateUser(this.username);
    } else {
      alert('enter username and password');
    }
  }

  authenticateUser(userName: string) {
    localStorage.setItem('user', userName);
    this.service.userSubject$.next(userName);
    this.service.setUserLoggedIn(true);
    if (userName == 'admin') {
      this.router.navigate(['/admin']);
    } else if (userName == 'manager') {
      this.router.navigate(['/manage']);
    } else if (userName == 'general') {
      this.router.navigate(['/general']);
    } else if (userName == 'template') {
      this.router.navigate(['/template']);
    } else if (userName == 'responsive') {
      this.router.navigate(['/rwdTemplate']);
    } else if (userName == 'hradmin') {
      this.router.navigate(['/admin']);
    } else if (userName == 'sidebar') {
      this.router.navigate(['/sidebar/dshbrd']);
    } else if (userName == 'test1') {
      this.router.navigate(['/test']);
    } else if (userName == 'material') {
      this.router.navigate(['/angmaterial']);
    }
  }
}
