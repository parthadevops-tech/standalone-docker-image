import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes:Routes = [
  {
    path: '', children:[
      {
        path: '', component:AdminComponent
      },
      {
        path: '', redirectTo:'/login',pathMatch:'full'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
