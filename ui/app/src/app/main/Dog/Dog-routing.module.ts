import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogHomeComponent } from './home/Dog-home.component';
import { DogNewComponent } from './new/Dog-new.component';
import { DogDetailComponent } from './detail/Dog-detail.component';

const routes: Routes = [
  {path: '', component: DogHomeComponent},
  { path: 'new', component: DogNewComponent },
  { path: ':id', component: DogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Dog-detail-permissions'
      }
    }
  },{
    path: ':dog_id/Walk', loadChildren: () => import('../Walk/Walk.module').then(m => m.WalkModule),
    data: {
        oPermission: {
            permissionId: 'Walk-detail-permissions'
        }
    }
}
];

export const DOG_MODULE_DECLARATIONS = [
    DogHomeComponent,
    DogNewComponent,
    DogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogRoutingModule { }