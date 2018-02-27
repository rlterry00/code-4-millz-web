import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserRegisterAboutPage } from './user-register-about';

@NgModule({
  declarations: [
    UserRegisterAboutPage,
  ],
  imports: [
    IonicPageModule.forChild(UserRegisterAboutPage),
  ],
})
export class UserRegisterAboutPageModule {}
