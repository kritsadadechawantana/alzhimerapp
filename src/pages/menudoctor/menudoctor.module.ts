import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenudoctorPage } from './menudoctor';

@NgModule({
  declarations: [
    MenudoctorPage,
  ],
  imports: [
    IonicPageModule.forChild(MenudoctorPage),
  ],
})
export class MenudoctorPageModule {}
