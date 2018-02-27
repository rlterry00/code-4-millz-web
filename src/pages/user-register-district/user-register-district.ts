import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserRegisterFinalPage } from "../user-register-final/user-register-final";
import { RegisterService } from "../../services/register.service";

@IonicPage()
@Component({
  selector: 'page-user-register-district',
  templateUrl: 'user-register-district.html',
})
export class UserRegisterDistrictPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private registerService: RegisterService, public viewCtrl: ViewController) {
  }
  zip = this.registerService.getUserZip();
  fromFinal = false;

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserRegisterDistrictPage');
  }
  ionViewWillEnter() {
    if(this.navParams.get("noBack")) {
        this.viewCtrl.showBackButton(false);
        this.fromFinal = true;
        console.log(this.fromFinal);
      }
    }

  swipeRightEvent(form) {
    if (form.valid) {
      this.registerService.addUserZip(form.value.userZip);
      this.navCtrl.push(UserRegisterFinalPage, {}, {animate: true, animation: "ios-transition", direction: "forward", duration: 1000 });
    }
  }
  goBack() {
    this.navCtrl.pop({animate: true, animation: "ios-transition"});
  }

}
