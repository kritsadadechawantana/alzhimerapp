import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaPage } from './ma';

@NgModule({
  declarations: [
    MaPage,
  ],
  imports: [
    IonicPageModule.forChild(MaPage),
  ],
})
export class MaPageModule {}
