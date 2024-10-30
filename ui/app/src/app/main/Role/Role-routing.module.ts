import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleHomeComponent } from './home/Role-home.component';
import { RoleNewComponent } from './new/Role-new.component';
import { RoleDetailComponent } from './detail/Role-detail.component';

const routes: Routes = [
  {path: '', component: RoleHomeComponent},
  { path: 'new', component: RoleNewComponent },
  { path: ':id', component: RoleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Role-detail-permissions'
      }
    }
  },{
    path: ':role_id/UserRole', loadChildren: () => import('../UserRole/UserRole.module').then(m => m.UserRoleModule),
    data: {
        oPermission: {
            permissionId: 'UserRole-detail-permissions'
        }
    }
}
];

export const ROLE_MODULE_DECLARATIONS = [
    RoleHomeComponent,
    RoleNewComponent,
    RoleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }