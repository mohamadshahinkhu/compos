import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionhomeComponent } from './collectionhome/collectionhome.component';
import { BioComponent } from './bio/bio.component';
import { CompanyComponent } from './company/company.component';
import { PartnerComponent } from './partner/partner.component';


@NgModule({
  declarations: [
    CollectionhomeComponent,
    BioComponent,
    CompanyComponent,
    PartnerComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule
  ],
 
})
export class CollectionModule { }
