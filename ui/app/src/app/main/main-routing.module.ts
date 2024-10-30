import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'BusinessAdministrator', loadChildren: () => import('./BusinessAdministrator/BusinessAdministrator.module').then(m => m.BusinessAdministratorModule) },
    
        { path: 'Dog', loadChildren: () => import('./Dog/Dog.module').then(m => m.DogModule) },
    
        { path: 'Owner', loadChildren: () => import('./Owner/Owner.module').then(m => m.OwnerModule) },
    
        { path: 'Payment', loadChildren: () => import('./Payment/Payment.module').then(m => m.PaymentModule) },
    
        { path: 'Review', loadChildren: () => import('./Review/Review.module').then(m => m.ReviewModule) },
    
        { path: 'Role', loadChildren: () => import('./Role/Role.module').then(m => m.RoleModule) },
    
        { path: 'SystemLog', loadChildren: () => import('./SystemLog/SystemLog.module').then(m => m.SystemLogModule) },
    
        { path: 'UserRole', loadChildren: () => import('./UserRole/UserRole.module').then(m => m.UserRoleModule) },
    
        { path: 'Walk', loadChildren: () => import('./Walk/Walk.module').then(m => m.WalkModule) },
    
        { path: 'WalkRequest', loadChildren: () => import('./WalkRequest/WalkRequest.module').then(m => m.WalkRequestModule) },
    
        { path: 'Walker', loadChildren: () => import('./Walker/Walker.module').then(m => m.WalkerModule) },
    
        { path: 'WalkerAvailability', loadChildren: () => import('./WalkerAvailability/WalkerAvailability.module').then(m => m.WalkerAvailabilityModule) },
    
        { path: 'WalkerRate', loadChildren: () => import('./WalkerRate/WalkerRate.module').then(m => m.WalkerRateModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }