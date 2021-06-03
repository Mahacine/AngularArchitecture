import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
{ path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }, 
{ path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) }, 
{ path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
