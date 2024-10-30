import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRoleHomeComponent } from './home/UserRole-home.component';
import { UserRoleNewComponent } from './new/UserRole-new.component';
import { UserRoleDetailComponent } from './detail/UserRole-detail.component';

const routes: Routes = [
  {path: '', component: UserRoleHomeComponent},
  { path: 'new', component: UserRoleNewComponent },
  { path: ':id', component: UserRoleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserRole-detail-permissions'
      }
    }
  }
];

export const USERROLE_MODULE_DECLARATIONS = [
    UserRoleHomeComponent,
    UserRoleNewComponent,
    UserRoleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoleRoutingModule { }