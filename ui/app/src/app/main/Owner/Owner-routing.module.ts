import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerHomeComponent } from './home/Owner-home.component';
import { OwnerNewComponent } from './new/Owner-new.component';
import { OwnerDetailComponent } from './detail/Owner-detail.component';

const routes: Routes = [
  {path: '', component: OwnerHomeComponent},
  { path: 'new', component: OwnerNewComponent },
  { path: ':id', component: OwnerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Owner-detail-permissions'
      }
    }
  },{
    path: ':owner_id/Dog', loadChildren: () => import('../Dog/Dog.module').then(m => m.DogModule),
    data: {
        oPermission: {
            permissionId: 'Dog-detail-permissions'
        }
    }
},{
    path: ':owner_id/Payment', loadChildren: () => import('../Payment/Payment.module').then(m => m.PaymentModule),
    data: {
        oPermission: {
            permissionId: 'Payment-detail-permissions'
        }
    }
},{
    path: ':owner_id/Review', loadChildren: () => import('../Review/Review.module').then(m => m.ReviewModule),
    data: {
        oPermission: {
            permissionId: 'Review-detail-permissions'
        }
    }
},{
    path: ':owner_id/WalkRequest', loadChildren: () => import('../WalkRequest/WalkRequest.module').then(m => m.WalkRequestModule),
    data: {
        oPermission: {
            permissionId: 'WalkRequest-detail-permissions'
        }
    }
}
];

export const OWNER_MODULE_DECLARATIONS = [
    OwnerHomeComponent,
    OwnerNewComponent,
    OwnerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }