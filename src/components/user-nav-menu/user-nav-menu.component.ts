import { Component, OnInit } from "@angular/core";
import { PopoverController, NavParams } from 'ionic-angular';
import { NavProfilePopover } from "../../components/popovers/nav-profile-popover";

@Component({
  selector: "app-user-nav-menu",
  templateUrl: "./user-nav-menu.component.html"
})
export class UserNavMenuComponent implements OnInit {
  constructor(public popoverCtrl: PopoverController, public navParams: NavParams) {}
  portfolioPic = "assets/imgs/default_portfolio.png"
  userName = "Kemba Walker";

  ngOnInit() {

  }
  showPortfolioMenu(event) {
    let popover = this.popoverCtrl.create(NavProfilePopover);
    popover.present({
      ev: event
    });
  }



}
