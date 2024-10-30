import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemLogHomeComponent } from './home/SystemLog-home.component';
import { SystemLogNewComponent } from './new/SystemLog-new.component';
import { SystemLogDetailComponent } from './detail/SystemLog-detail.component';

const routes: Routes = [
  {path: '', component: SystemLogHomeComponent},
  { path: 'new', component: SystemLogNewComponent },
  { path: ':id', component: SystemLogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SystemLog-detail-permissions'
      }
    }
  }
];

export const SYSTEMLOG_MODULE_DECLARATIONS = [
    SystemLogHomeComponent,
    SystemLogNewComponent,
    SystemLogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemLogRoutingModule { }