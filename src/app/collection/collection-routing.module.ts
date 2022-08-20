import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { CollectionhomeComponent } from './collectionhome/collectionhome.component';
import { CompanyComponent } from './company/company.component';
import { PartnerComponent } from './partner/partner.component';

const routes: Routes = [
  {path:'' , component: CollectionhomeComponent,
   children : [
    {path : '' , component: BioComponent},
    {path : 'company' , component : CompanyComponent},
    {path : 'partner' , component : PartnerComponent}
   ]
},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
