import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminsPage } from './admins.page';

const routes: Routes = [
  {
    path: '',
    component: AdminsPage
  },
  {
    path: ':adminId',
    loadChildren: () => import('./admin-detail/admin-detail.module').then( m => m.AdminDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminsPageRoutingModule {}
