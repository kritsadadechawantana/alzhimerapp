import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowmePage } from './showme';

@NgModule({
  declarations: [
    ShowmePage,
  ],
  imports: [
    IonicPageModule.forChild(ShowmePage),
  ],
})
export class ShowmePageModule {}
