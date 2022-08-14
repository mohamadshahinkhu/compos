import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewshomeComponent } from './viewshome/viewshome.component';

const routes: Routes = [{path:'views', component:ViewshomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
