import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserRegisterInterestsPage } from './user-register-interests';

@NgModule({
  declarations: [
    UserRegisterInterestsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserRegisterInterestsPage),
  ],
})
export class UserRegisterInterestsPageModule {}
