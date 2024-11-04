import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { EmployeeService } from './httpServ/employee.service';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { Keepalive, NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { ModalDirective, ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { IdleService } from './httpServ/idle.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIdleKeepaliveModule, ModalModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Keepalive, BsModalRef],
})
export class AppComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  title = 'standaloneComponent15';
  user: any;
  user$!: Observable<any>;

  idleState = 'Not started.';
  timedOut = false;
  lastPing = new Date();

  specificUrl = '/login';

  @ViewChild('childModal', { static: false }) childModal!: ModalDirective;

  constructor(
    private service: EmployeeService,
    public _router: Router,
    private idle: Idle,
    private keepalive: Keepalive,
    private idleService: IdleService
  ) {
    // sets an idle timeout of 60 seconds, for testing purposes.
    // this.idle.setIdle(5);

    // // sets a timeout period of 5 seconds. after 120 seconds of inactivity, the user will be considered timed out.
    // this.idle.setTimeout(5);

    // // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    // this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    // this.idle.onIdleEnd.subscribe(() => {
    //   this.idleState = 'No longer idle.';
    //   //console.log(this.idleState);
    //   this.reset();
    // });

    // this.idle.onTimeout.subscribe(() => {
    //   this.idleState = 'Timed out!';
    //   this.timedOut = true;
    //   //console.log(this.idleState);
    //   //this._router.navigate(['/']);
    //   this.logout();
    // });

    // this.idle.onIdleStart.subscribe(() => {
    //   this.idleState = "You've gone idle!";
    //   //console.log(this.idleState);
    //   this.childModal.show();
    // });

    // this.idle.onTimeoutWarning.subscribe((countdown) => {
    //   this.idleState = 'You will time out in ' + countdown + ' seconds!';
    //   //console.log(this.idleState);
    // });

    // // sets the ping interval to 15 seconds
    // this.keepalive.interval(15);

    // this.keepalive.onPing.subscribe(() => (this.lastPing = new Date()));

    // this.service.getUserLoggedIn().subscribe((userLoggedIn) => {
    //   if (userLoggedIn) {
    //     idle.watch();
    //     this.timedOut = false;
    //   } else {
    //     idle.stop();
    //   }
    // });

    // get value with subscribe
    this.service.userSubject$.subscribe((res) => {
      this.user = res;
      console.log(this.user);
    });
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    console.log(this.user);
    if (this.user === 'admin') {
      this._router.navigate(['/admin']);
    } else if (this.user === 'manager') {
      this._router.navigate(['/manage']);
    } else if (this.user === 'material') {
      this._router.navigate(['/angmaterial']);
    } else {
      this._router.navigate(['login']);
      //this.idleService.reset();
    }

    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkSpecificUrl(event.urlAfterRedirects);
      }
    });
    // get value with Asyncpipe
    //this.user$ = this.service.userSubject$.asObservable();
    //console.log(this.user$)
    //  const source = interval(1000);
    //  const clicks = fromEvent(document, 'click');
    //  const result = source.pipe(takeUntil(clicks));
    //  result.subscribe(x => console.log(x));
    //this.idleService.reset();
  }

  logout() {
    // this.childModal.hide();
    this.service.setUserLoggedIn(false);
    localStorage.clear();
    this.service.userSubject$.next(null);
    this.idleService.idle.stop();
    this._router.navigate(['login']);
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    console.log('Back button pressed');
    this.service.userSubject$.next(null);
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  stay() {
    this.childModal.hide();
    this.reset();
  }

  private checkSpecificUrl(currentUrl: string) {
    if (currentUrl === this.specificUrl) {
      console.log('Specific URL is active:', currentUrl);
      this.idleService.idle.stop();
      // Perform specific actions when the URL is detected
    }
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
