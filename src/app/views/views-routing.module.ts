import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { StaticsComponent } from './statics/statics.component';
import { ViewshomeComponent } from './viewshome/viewshome.component';

const routes: Routes = [{
  path: 'views', component: ViewshomeComponent,
  children: [{ path: '', component: StaticsComponent },
  { path: 'item-list', component: ItemListComponent }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
