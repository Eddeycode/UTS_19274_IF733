import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminsPageRoutingModule } from './admins-routing.module';

import { AdminsPage } from './admins.page';
import { ModalAddComponent } from './modal-add/modal-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdminsPage, ModalAddComponent]
})
export class AdminsPageModule {}
