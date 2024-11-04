import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RwdAngmatRoutingModule } from './rwd-angmat-routing.module';
import { ResponsivematerialComponent } from './responsivematerial/responsivematerial.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [ResponsivematerialComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RwdAngmatRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
})
export class RwdAngmatModule {}
