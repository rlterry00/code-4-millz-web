import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserRegisterDistrictPage } from './user-register-district';

@NgModule({
  declarations: [
    UserRegisterDistrictPage,
  ],
  imports: [
    IonicPageModule.forChild(UserRegisterDistrictPage),
  ],
})
export class UserRegisterDistrictPageModule {}
