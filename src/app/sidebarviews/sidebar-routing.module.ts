import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarmainComponent } from './sidebarmain/sidebarmain.component';
import { SidebardashboardComponent } from './sidebardashboard/sidebardashboard.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: '', children:[
      {
        path: '', component:SidebarmainComponent,
        children:[
          {
            path: 'dshbrd', component: SidebardashboardComponent
          },
          {
            path: 'customer', component:CustomerComponent
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
