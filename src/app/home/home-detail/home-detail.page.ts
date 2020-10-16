import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminsService } from 'src/app/admins/admins.service';
import { Admin } from 'src/app/admins/model/admin.model';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
  loadedAdmin: Admin;
  constructor(
  private activatedRoute: ActivatedRoute,
  private adminsService: AdminsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("adminId")) {
        return;
      }
      const adminId = paramMap.get("adminId");
      this.loadedAdmin = this.adminsService.getAdmin(adminId);
    });
  }
}
