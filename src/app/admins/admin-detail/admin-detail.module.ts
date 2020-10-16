import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDetailPageRoutingModule } from './admin-detail-routing.module';

import { AdminDetailPage } from './admin-detail.page';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDetailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdminDetailPage, ModalEditComponent]
})
export class AdminDetailPageModule {}
