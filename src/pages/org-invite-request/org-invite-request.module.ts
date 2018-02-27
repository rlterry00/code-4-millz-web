import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrgInviteRequestPage } from './org-invite-request';

@NgModule({
  declarations: [
    OrgInviteRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(OrgInviteRequestPage),
  ],
})
export class OrgInviteRequestPageModule {}
