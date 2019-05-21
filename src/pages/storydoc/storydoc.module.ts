import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StorydocPage } from './storydoc';

@NgModule({
  declarations: [
    StorydocPage,
  ],
  imports: [
    IonicPageModule.forChild(StorydocPage),
  ],
})
export class StorydocPageModule {}
