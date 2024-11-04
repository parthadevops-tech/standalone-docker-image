import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeckerrankmainComponent } from './heckerrankmain/heckerrankmain.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HeckerrankmainComponent,
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
export class HackerrankRoutingRoutingModule {}
