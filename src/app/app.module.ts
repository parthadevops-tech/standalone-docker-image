import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
//import { EmployeeService } from './httpServ/employee.service';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { DynamicInterceptorInterceptor } from './dynamic-interceptor.interceptor';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';
//import { TimeoutModalComponent } from './timeout-modal/timeout-modal.component';
//import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
//import { ModalModule } from 'ngx-bootstrap/modal';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    //TimeoutModalComponent
  ],
  bootstrap: [],
  imports: [BrowserModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DynamicInterceptorInterceptor,
      multi: true,
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
