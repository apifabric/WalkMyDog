import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {WALKERRATE_MODULE_DECLARATIONS, WalkerRateRoutingModule} from  './WalkerRate-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    WalkerRateRoutingModule
  ],
  declarations: WALKERRATE_MODULE_DECLARATIONS,
  exports: WALKERRATE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WalkerRateModule { }