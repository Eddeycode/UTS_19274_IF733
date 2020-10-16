import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import {
  LoadingController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { AdminDetailPageModule } from "../admin-detail/admin-detail.module";
import { AdminDetailPage } from "../admin-detail/admin-detail.page";
import { AdminsService } from "../admins.service";
import { Admin } from '../model/admin.model';

@Component({
  selector: "app-modal-edit",
  templateUrl: "./modal-edit.component.html",
  styleUrls: ["./modal-edit.component.scss"],
})
export class ModalEditComponent implements OnInit {
  @Input() id: string;
  form: FormGroup;
  admin: Admin;

  constructor(
    private adminsService: AdminsService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      nama: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      email: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      telepon: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      imageUrl: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
    });
  }
  onSubmit(form: FormGroup) {
  }

  onCancel() {
    this.modalCtrl.dismiss(null, "cancel");
  }

  onSave() {
    this.presentLoading().then(() => {
      this.modalCtrl.dismiss(
        { message: "edited data", id: this.id },
        "confirm"
      );
      this.presentToast();
    });
  }
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: "Editing admin...",
      duration: 5000,
    });
    await loading.present();

    await loading.onDidDismiss();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: "Data edited.",
      position: "bottom",
      color: "success",
      duration: 2000,
    });

    toast.present();
  }
}
