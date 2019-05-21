import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamedocPage } from './gamedoc';

@NgModule({
  declarations: [
    GamedocPage,
  ],
  imports: [
    IonicPageModule.forChild(GamedocPage),
  ],
})
export class GamedocPageModule {}
