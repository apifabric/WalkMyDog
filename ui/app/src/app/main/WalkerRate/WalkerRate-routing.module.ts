import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalkerRateHomeComponent } from './home/WalkerRate-home.component';
import { WalkerRateNewComponent } from './new/WalkerRate-new.component';
import { WalkerRateDetailComponent } from './detail/WalkerRate-detail.component';

const routes: Routes = [
  {path: '', component: WalkerRateHomeComponent},
  { path: 'new', component: WalkerRateNewComponent },
  { path: ':id', component: WalkerRateDetailComponent,
    data: {
      oPermission: {
        permissionId: 'WalkerRate-detail-permissions'
      }
    }
  }
];

export const WALKERRATE_MODULE_DECLARATIONS = [
    WalkerRateHomeComponent,
    WalkerRateNewComponent,
    WalkerRateDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalkerRateRoutingModule { }