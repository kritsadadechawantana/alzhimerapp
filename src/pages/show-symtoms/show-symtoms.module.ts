import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowSymtomsPage } from './show-symtoms';

@NgModule({
  declarations: [
    ShowSymtomsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowSymtomsPage),
  ],
})
export class ShowSymtomsPageModule {}
