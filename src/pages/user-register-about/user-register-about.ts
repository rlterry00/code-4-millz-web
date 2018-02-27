import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserRegisterDistrictPage } from "../user-register-district/user-register-district";
import { RegisterService } from "../../services/register.service";
import { UserRegisterFinalPage } from"../user-register-final/user-register-final";

@IonicPage()
@Component({
  selector: 'page-user-register-about',
  templateUrl: 'user-register-about.html',
})
export class UserRegisterAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private registerService: RegisterService, public viewCtrl: ViewController) {
  }

  aboutInfo = this.registerService.getUserAbout();
  name = "";
  userAbout = "";
  isFinal = this.navParams.get("final");

  ionViewDidLoad() {
    this.name = this.aboutInfo.name;
    this.userAbout = this.aboutInfo.about;
  }
  ionViewWillEnter() {
    if(this.navParams.get("noBack"))
        this.viewCtrl.showBackButton(false);
    }

  swipeRightEvent(form) {
    if (form.valid) {
      this.registerService.addUserInfo(form.value.userName, form.value.userAbout);
      if(this.isFinal === true) {
      this.navCtrl.push(UserRegisterFinalPage, {}, {animate: true, animation: "ios-transition", direction: "forward"});
      } else {
      this.navCtrl.push(UserRegisterDistrictPage, {}, {animate: true, animation: "ios-transition", direction: "forward"});
      }
    }
  }
  goBack() {
    this.navCtrl.pop({animate: true, animation: "ios-transition"});
  }


}
