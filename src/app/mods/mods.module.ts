import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModshomeComponent } from './modshome/modshome.component';


@NgModule({
  declarations: [
    ModshomeComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule
  ],
  
})
export class ModsModule { }
