import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SN1 } from './sn1';

@NgModule({
  declarations: [
    SN1,
  ],
  imports: [
    IonicPageModule.forChild(SN1),
  ],
})
export class HomePageModule {}
