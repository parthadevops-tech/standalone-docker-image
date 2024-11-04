import { Injectable } from '@angular/core';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import { TimeoutModalComponent } from '../timeout-modal/timeout-modal.component';

@Injectable({
  providedIn: 'root',
})
export class IdleService {
  public idleState = 'Not started.';
  public timedOut = false;
  public lastPing = new Date();
  public modalRef?: BsModalRef;

  constructor(
    public idle: Idle,
    private keepalive: Keepalive,
    public modalService: BsModalService,
    private service: EmployeeService,
    private _router: Router
  ) {
    this.setup();
  }

  setup() {
    this.idle.setIdle(30);
    this.idle.setTimeout(30);
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onIdleEnd.subscribe(() => {
      this.idleState = 'No longer idle.';
      //console.log(this.idleState);
      this.reset();
    });

    this.idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      this.modalRef?.hide();
      this.service.setUserLoggedIn(false);
      localStorage.clear();
      this.service.userSubject$.next(null);
      this._router.navigate(['login']);
      //console.log(this.idleState);
      //this._router.navigate(['/']);
    });

    this.idle.onIdleStart.subscribe(() => {
      this.idleState = "You've gone idle!";
      this.showTimeoutWarning();
    });

    this.idle.onTimeoutWarning.subscribe((countdown: number) => {
      this.idleState = `You will time out in ${countdown} seconds!`;
    });

    // Set up keepalive service
    this.keepalive.interval(15);
    this.keepalive.onPing.subscribe(() => (this.lastPing = new Date()));

    this.reset();
    this.service.getUserLoggedIn().subscribe((userLoggedIn) => {
      if (userLoggedIn) {
        this.idle.watch();
        this.timedOut = false;
      } else {
        this.idle.stop();
      }
    });
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
    this.modalRef?.hide();
  }

  showTimeoutWarning() {
    this.modalRef = this.modalService.show(TimeoutModalComponent);
  }
}
