import { Injectable } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";
import { Admin } from "./model/admin.model";
import { CPU } from './model/cpu.model';
import { GPU } from './model/gpu.model';
import { MOBO } from './model/motherboard.model';
import { RAM } from './model/ram.model';

@Injectable({
  providedIn: "root",
})
export class AdminsService {
  private admins: (Admin | CPU | GPU | MOBO | RAM)[] = [
    {
      id: "001",
      imageUrl: "https://ecs7.tokopedia.net/img/cache/700/product-1/2017/7/14/0/0_2a7d1d57-3953-487c-bb04-e5443f5834c6_625_625.jpg",
      nama: "INTEL CORE I7 - 6700, 3.4 GHZ, LGA 1151, SKYLAKE SERIES",
      merek: "INTEL",
      model: "BX80662I76700",
      harga: "Rp. 4.170.000",
      stock: "5",
      type: "CPU",
      baseClock: "3.4 GHz",
      boostClock: "4.00 GHz",
      core: "4",
      thread: "8",
    },
    {
      id: "002",
      imageUrl: "https://ecs7.tokopedia.net/img/cache/700/product-1/2018/10/17/25049694/25049694_ed658af4-cd72-484a-b8dc-694dbbddb9fa_700_700.jpg",
      nama: "MAINBOARD MOBO LGA SOCKET 1150 H81 ECS USB 3.0",
      merek: "ECS Elitegroup",
      model: "Item model number H81H3-M4",
      harga: "Rp. 420.000",
      stock: "2",
      type: "MOBO",
      chipset: "Intel H81 Express Chipset",
      proMerk: "INTEL"
    },
    {
      id: "003",
      imageUrl: "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/5/3/19873772/19873772_9b557942-c332-4a4e-84ac-7d9107bebcd4_1440_1440",
      nama: "RAM PC KINGSTON DDR2 2GB 6400 / 800 MHz ORIGINAL",
      merek: "kingston",
      model: "kingston",
      harga: "Rp. 62.000",
      stock: "1",
      type: "RAM",
      speed: "800MHz / 6400",
      size: "2 GB"
    },
    {
      id: "004",
      imageUrl: "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/3/11/2778743/2778743_80ffc7ca-65d2-40b2-98ab-42146220f24c_800_800.png",
      nama: "Gigabyte Nvidia Geforce Gtx 1050Ti (GV-N105TOC-4GD)",
      merek: "NVIDIA",
      model: "Gigabyte",
      harga: "Rp. 2.152.000",
      stock: "9",
      type: "GPU"
    }
  ];


  constructor() {}

  getAllAdmins() {
    return this.admins;
  }

  getAdmin(adminId: string) {
    return {
      ...this.admins.find((admin) => {
        return admin.id === adminId;
      }),
    };
  }

  deleteAdmin(adminId: string) {
    this.admins = this.admins.filter((admin) => {
      return admin.id !== adminId;
    });
  }

}