import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {WALKREQUEST_MODULE_DECLARATIONS, WalkRequestRoutingModule} from  './WalkRequest-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    WalkRequestRoutingModule
  ],
  declarations: WALKREQUEST_MODULE_DECLARATIONS,
  exports: WALKREQUEST_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WalkRequestModule { }