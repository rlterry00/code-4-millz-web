import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserRegisterAuthInfoPage } from './user-register-auth-info';

@NgModule({
  declarations: [
    UserRegisterAuthInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(UserRegisterAuthInfoPage),
  ],
})
export class UserRegisterAuthInfoPageModule {}
