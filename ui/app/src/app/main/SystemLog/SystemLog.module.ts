import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SYSTEMLOG_MODULE_DECLARATIONS, SystemLogRoutingModule} from  './SystemLog-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SystemLogRoutingModule
  ],
  declarations: SYSTEMLOG_MODULE_DECLARATIONS,
  exports: SYSTEMLOG_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SystemLogModule { }