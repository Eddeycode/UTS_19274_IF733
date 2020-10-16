import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";

import { AdminsService } from "../admins.service";
import { ModalEditComponent } from "../modal-edit/modal-edit.component";
import { Admin } from '../model/admin.model';

@Component({
  selector: "app-admin-detail",
  templateUrl: "./admin-detail.page.html",
  styleUrls: ["./admin-detail.page.scss"],
})
export class AdminDetailPage implements OnInit {
  loadedAdmin: Admin;
  constructor(
    private adminsService: AdminsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("adminId")) {
        return;
      }
      const adminId = paramMap.get("adminId");
      this.loadedAdmin = this.adminsService.getAdmin(adminId);
    });
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalEditComponent,
      componentProps: { id: this.loadedAdmin.id },
    });

    modal.onDidDismiss().then((resultData) => {
      if (resultData.data.id)
        this.loadedAdmin = this.adminsService.getAdmin(
          resultData.data.id
        );
    });

    return await modal.present();
  }

  deleteAdmin() {
    this.adminsService.deleteAdmin(this.loadedAdmin.id);
    this.presentToast();
    this.router.navigate(["/admins"]);
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: "Are you sure?",
      message: "Do you really want to delete this Data?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Delete",
          handler: () => this.deleteAdmin(),
        },
      ],
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: "Data deleted.",
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }
}
