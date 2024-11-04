import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EmployeeService } from '../httpServ/employee.service';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  
  constructor(public r:Router,private service:EmployeeService){}

  ngOnInit(): void {
    
  }
  gotoHome(){
    //sessionStorage.clear();
    this.service.userSubject$.next(null)
    this.r.navigate(['/login']);
  }
}
