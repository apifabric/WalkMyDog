import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {BUSINESSADMINISTRATOR_MODULE_DECLARATIONS, BusinessAdministratorRoutingModule} from  './BusinessAdministrator-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    BusinessAdministratorRoutingModule
  ],
  declarations: BUSINESSADMINISTRATOR_MODULE_DECLARATIONS,
  exports: BUSINESSADMINISTRATOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BusinessAdministratorModule { }