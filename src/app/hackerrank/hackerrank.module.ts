import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackerrankRoutingRoutingModule } from './hackerrank-routing-routing.module';
import { HeckerrankmainComponent } from './heckerrankmain/heckerrankmain.component';
import { DataformComponent } from './dataform/dataform.component';
import { DatalistComponent } from './datalist/datalist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeckerrankmainComponent, DataformComponent, DatalistComponent],
  imports: [CommonModule, FormsModule, HackerrankRoutingRoutingModule],
})
export class HackerrankModule {}
