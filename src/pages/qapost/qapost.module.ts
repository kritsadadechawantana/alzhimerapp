import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QapostPage } from './qapost';

@NgModule({
  declarations: [
    QapostPage,
  ],
  imports: [
    IonicPageModule.forChild(QapostPage),
  ],
})
export class QapostPageModule {}
