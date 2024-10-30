import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {WALKERAVAILABILITY_MODULE_DECLARATIONS, WalkerAvailabilityRoutingModule} from  './WalkerAvailability-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    WalkerAvailabilityRoutingModule
  ],
  declarations: WALKERAVAILABILITY_MODULE_DECLARATIONS,
  exports: WALKERAVAILABILITY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WalkerAvailabilityModule { }