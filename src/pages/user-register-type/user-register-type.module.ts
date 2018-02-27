import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserRegisterTypePage } from './user-register-type';

@NgModule({
  declarations: [
    UserRegisterTypePage,
  ],
  imports: [
    IonicPageModule.forChild(UserRegisterTypePage),
  ],
})
export class UserRegisterTypePageModule {}
