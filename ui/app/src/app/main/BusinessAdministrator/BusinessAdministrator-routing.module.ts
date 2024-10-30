import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessAdministratorHomeComponent } from './home/BusinessAdministrator-home.component';
import { BusinessAdministratorNewComponent } from './new/BusinessAdministrator-new.component';
import { BusinessAdministratorDetailComponent } from './detail/BusinessAdministrator-detail.component';

const routes: Routes = [
  {path: '', component: BusinessAdministratorHomeComponent},
  { path: 'new', component: BusinessAdministratorNewComponent },
  { path: ':id', component: BusinessAdministratorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'BusinessAdministrator-detail-permissions'
      }
    }
  }
];

export const BUSINESSADMINISTRATOR_MODULE_DECLARATIONS = [
    BusinessAdministratorHomeComponent,
    BusinessAdministratorNewComponent,
    BusinessAdministratorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessAdministratorRoutingModule { }