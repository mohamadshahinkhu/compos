import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewshomeComponent } from './viewshome/viewshome.component';
import { StaticsComponent } from './statics/statics.component';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [
    ViewshomeComponent,
    StaticsComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
