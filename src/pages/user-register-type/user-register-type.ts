import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserLoginPage } from "../user-login/user-login";
import { UserRegisterAuthInfoPage } from "../user-register-auth-info/user-register-auth-info";

@IonicPage()
@Component({
  selector: 'page-user-register-type',
  templateUrl: 'user-register-type.html',
})
export class UserRegisterTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loginPage = UserLoginPage;
  authInfoPage = UserRegisterAuthInfoPage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserRegisterTypePage');
  }

}
