import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowdocPage } from './showdoc';

@NgModule({
  declarations: [
    ShowdocPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowdocPage),
  ],
})
export class ShowdocPageModule {}
