import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsModule } from './elements/elements.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'elements' , loadChildren:() => import('./elements/elements.module').then(m => m.ElementsModule)},
  {path:'collection' , loadChildren:() => import('./collection/collection.module').then(m => m.CollectionModule)}, 
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found' },
  { path: 'not-found', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 