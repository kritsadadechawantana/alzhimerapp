import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowDataPatientPage } from './show-data-patient';

@NgModule({
  declarations: [
    ShowDataPatientPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowDataPatientPage),
  ],
})
export class ShowDataPatientPageModule {}
