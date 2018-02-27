import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserRegisterTypePage } from "../user-register-type/user-register-type";
import { OrgInviteRequestPage } from "../org-invite-request/org-invite-request";

@IonicPage()
@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
})
export class UserLoginPage {
  startRegister = UserRegisterTypePage;
  inviteRequest = OrgInviteRequestPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLoginPage');
  }

}
