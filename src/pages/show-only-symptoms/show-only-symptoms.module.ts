import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowOnlySymptomsPage } from './show-only-symptoms';

@NgModule({
  declarations: [
    ShowOnlySymptomsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowOnlySymptomsPage),
  ],
})
export class ShowOnlySymptomsPageModule {}
