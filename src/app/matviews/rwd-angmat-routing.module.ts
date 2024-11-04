import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsivematerialComponent } from './responsivematerial/responsivematerial.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ResponsivematerialComponent,
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RwdAngmatRoutingModule {}
