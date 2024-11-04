import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management/management.component';

const routes:Routes = [
  {
    path: '', children:[
      {
        path: '', component: ManagementComponent
      },
      {
        path: '', redirectTo: '/login', pathMatch:'full'
      }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ManagementRoutingModule { }
