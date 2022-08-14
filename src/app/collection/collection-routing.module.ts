import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionhomeComponent } from './collectionhome/collectionhome.component';

const routes: Routes = [{path:'collection' , component: CollectionhomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
