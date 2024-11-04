import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general/general.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
//import { DynamicCompComponent } from './general/Dynamic/dynamic-comp/dynamic-comp.component';


@NgModule({
  declarations: [
    GeneralComponent,
    //DynamicCompComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    YouTubePlayerModule,
  ]
})
export class GeneralModule { }
