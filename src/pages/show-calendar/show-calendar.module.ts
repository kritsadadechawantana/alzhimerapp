import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowCalendarPage } from './show-calendar';

@NgModule({
  declarations: [
    ShowCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowCalendarPage),
  ],
})
export class ShowCalendarPageModule {}
