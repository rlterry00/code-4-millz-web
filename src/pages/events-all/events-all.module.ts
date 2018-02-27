import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsAllPage } from './events-all';

@NgModule({
  declarations: [
    EventsAllPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsAllPage),
  ],
})
export class EventsAllPageModule {}
