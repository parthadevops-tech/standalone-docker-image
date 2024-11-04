import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiveRoutingModule } from './responsive-routing.module';
import { RwdBootstrapComponent } from './rwd-bootstrap/rwd-bootstrap.component';


@NgModule({
  declarations: [
    RwdBootstrapComponent
  ],
  imports: [
    CommonModule,
    ResponsiveRoutingModule
  ]
})
export class ResponsiveModule { }
