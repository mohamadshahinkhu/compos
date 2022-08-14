import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionhomeComponent } from './collectionhome/collectionhome.component';


@NgModule({
  declarations: [
    CollectionhomeComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule
  ],
 
})
export class CollectionModule { }
