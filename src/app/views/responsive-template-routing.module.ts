import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsiveTmpltComponent } from './responsive-tmplt/responsive-tmplt.component';

const routes: Routes = [
  {
    path: '', children:[
      {
        path: '', component:ResponsiveTmpltComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsiveTemplateRoutingModule { }
