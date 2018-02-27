import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsSelectedPage } from './events-selected';

@NgModule({
  declarations: [
    EventsSelectedPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsSelectedPage),
  ],
})
export class EventsSelectedPageModule {}
