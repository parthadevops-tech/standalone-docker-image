import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiveTemplateRoutingModule } from './responsive-template-routing.module';
import { ResponsiveTmpltComponent } from './responsive-tmplt/responsive-tmplt.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResponsiveTmpltComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ResponsiveTemplateRoutingModule
  ]
})
export class ResponsiveTemplateModule { }
