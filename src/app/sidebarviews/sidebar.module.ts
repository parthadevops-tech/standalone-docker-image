import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarmainComponent } from './sidebarmain/sidebarmain.component';
import { SidebardashboardComponent } from './sidebardashboard/sidebardashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SidebarmainComponent,
    SidebardashboardComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule,
    ReactiveFormsModule
  ]
})
export class SidebarModule { }
