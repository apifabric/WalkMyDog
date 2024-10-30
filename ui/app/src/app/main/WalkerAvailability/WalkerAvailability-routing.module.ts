import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalkerAvailabilityHomeComponent } from './home/WalkerAvailability-home.component';
import { WalkerAvailabilityNewComponent } from './new/WalkerAvailability-new.component';
import { WalkerAvailabilityDetailComponent } from './detail/WalkerAvailability-detail.component';

const routes: Routes = [
  {path: '', component: WalkerAvailabilityHomeComponent},
  { path: 'new', component: WalkerAvailabilityNewComponent },
  { path: ':id', component: WalkerAvailabilityDetailComponent,
    data: {
      oPermission: {
        permissionId: 'WalkerAvailability-detail-permissions'
      }
    }
  }
];

export const WALKERAVAILABILITY_MODULE_DECLARATIONS = [
    WalkerAvailabilityHomeComponent,
    WalkerAvailabilityNewComponent,
    WalkerAvailabilityDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalkerAvailabilityRoutingModule { }