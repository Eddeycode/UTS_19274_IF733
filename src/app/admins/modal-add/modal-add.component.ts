import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  LoadingController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { Admin } from "../model/admin.model";
import { AdminsService } from "../admins.service";

@Component({
  selector: "app-modal-add",
  templateUrl: "./modal-add.component.html",
  styleUrls: ["./modal-add.component.scss"],
})
export class ModalAddComponent implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private adminsService: AdminsService
  ) {}

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss(null, "cancel");
  }

  onSave() {
    this.presentLoading().then(() => {
      this.modalCtrl.dismiss({ message: "added new admin" }, "confirm");
      this.presentToast();
    });
  }
  onSubmit(form: NgForm) {
    console.log("onSubmit");
    console.log(form);
    if (!form.valid) {
      return;
    }
    this.adminsService.addAdmin(form);
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: "Saving data...",
      duration: 5000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: "New data added.",
      position: "bottom",
      color: "success",
      duration: 2000,
    });

    toast.present();
  }
}
