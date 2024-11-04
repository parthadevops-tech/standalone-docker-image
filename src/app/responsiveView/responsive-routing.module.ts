import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RwdBootstrapComponent } from './rwd-bootstrap/rwd-bootstrap.component';

const routes: Routes = [
  {
    path: '', children:[
      {
        path: '', component:RwdBootstrapComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsiveRoutingModule { }
