import { Component, ViewChild } from '@angular/core';
import { BsModalRef, ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import { EmployeeService } from '../httpServ/employee.service';
import { Router, RouterModule } from '@angular/router';
import { IdleService } from '../httpServ/idle.service';
import { CommonModule } from '@angular/common';
import { Keepalive, NgIdleKeepaliveModule } from '@ng-idle/keepalive';

@Component({
  selector: 'app-timeout-modal',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIdleKeepaliveModule, ModalModule],
  templateUrl: './timeout-modal.component.html',
  styleUrls: ['./timeout-modal.component.css'],
  providers: [Keepalive, BsModalRef],
})
export class TimeoutModalComponent {
  constructor(
    public bsModalRef: BsModalRef,
    private service: EmployeeService,
    public idleSrv: IdleService,
    public _router: Router,
    private modalRef?: BsModalRef
  ) {}

  stay() {
    this.idleSrv.modalRef?.hide();
    this.idleSrv.reset();
  }

  logout() {
    this.modalRef?.hide();
    this.service.setUserLoggedIn(false);
    // sessionStorage.clear();
    this.service.userSubject$.next(null);
    this._router.navigate(['login']);
  }

  hideChildModal() {
    this.bsModalRef.hide();
  }
}
