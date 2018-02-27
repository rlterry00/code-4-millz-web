import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController, MenuController } from "ionic-angular";
import { UserLoginPage } from '../pages/user-login/user-login';
import { UserRegisterTypePage } from "../pages/user-register-type/user-register-type";
import { UserRegisterAuthInfoPage } from "../pages/user-register-auth-info/user-register-auth-info";
import { EventsAllPage } from "../pages/events-all/events-all";
import { HomePage } from "../pages/home/home";
import { UserRegisterInterestsPage } from "../pages/user-register-interests/user-register-interests";
import { UserRegisterAboutPage } from "../pages/user-register-about/user-register-about";
import { UserRegisterDistrictPage } from "../pages/user-register-district/user-register-district";
import { UserRegisterFinalPage } from "../pages/user-register-final/user-register-final";
import { OrgInviteRequestPage } from "../pages/org-invite-request/org-invite-request";
import { OrgPostEventPage } from "../pages/org-post-event/org-post-event";
import { EventsSelectedPage } from "../pages/events-selected/events-selected";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  loginPage = UserLoginPage;
  eventsPage = EventsAllPage;
  homePage = HomePage;
  interestsPage = UserRegisterInterestsPage;
  aboutPage = UserRegisterAboutPage;
  districtPage = UserRegisterDistrictPage;
  finalPage = UserRegisterFinalPage;
  authPage = UserRegisterAuthInfoPage;
  orgInviteRequestPage = OrgInviteRequestPage;
  postEventPage = OrgPostEventPage;
  selectedEventPage = EventsSelectedPage;
  @ViewChild('nav') nav: NavController;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.push(page);
    this.menuCtrl.close();
  }
}
