import { Component, OnInit } from "@angular/core";
import {
  IonItemSliding,
  LoadingController,
  ModalController,
  ToastController,
} from "@ionic/angular";

import { ModalAddComponent } from "./modal-add/modal-add.component";

import { AdminsService } from "./admins.service";
import { Admin } from "./model/admin.model";
import { ModalEditComponent } from "./modal-edit/modal-edit.component";
@Component({
  selector: "app-admins",
  templateUrl: "./admins.page.html",
  styleUrls: ["./admins.page.scss"],
})
export class AdminsPage implements OnInit {
  admins: Admin[];
  constructor(
    private adminsService: AdminsService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.admins = this.adminsService.getAllAdmins();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalAddComponent,
    });

    modal.onDidDismiss().then((resultData) => {});

    return await modal.present();
  }

  fav(admin: Admin, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log(admin.nama, "is set as priority admin");
  }

  onFilterChange(event: CustomEvent) {
    console.log(event.detail);
  }
}
