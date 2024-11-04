import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
//import { AppModule } from './app/app.module';
import { routes } from './app/app-routing.module';
import { provideRouter } from '@angular/router';
import { provideNgIdleKeepalive } from '@ng-idle/keepalive';
import { provideNgIdle } from '@ng-idle/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import {
  DatePipe,
  //PathLocationStrategy,
  //HashLocationStrategy,
  //LocationStrategy,
} from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideNgIdle(),
    provideNgIdleKeepalive(),
    BsModalService,
    BsModalRef,
    DatePipe,
    importProvidersFrom(BrowserAnimationsModule),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
}).catch((err) => console.error(err));

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
