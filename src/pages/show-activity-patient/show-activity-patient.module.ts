import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowActivityPatientPage } from './show-activity-patient';

@NgModule({
  declarations: [
    ShowActivityPatientPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowActivityPatientPage),
  ],
})
export class ShowActivityPatientPageModule {}
