import { Component, OnInit } from "@angular/core";
import {
  IonItemSliding,
  LoadingController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { AdminsService } from '../admins/admins.service';
import { ModalAddComponent } from '../admins/modal-add/modal-add.component';
import { Admin } from '../admins/model/admin.model';

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
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
