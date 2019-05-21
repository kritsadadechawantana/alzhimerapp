import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';

/**
 * Generated class for the ConvertModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-convert-modal',
  templateUrl: 'convert-modal.html',
})
export class ConvertModalPage {

  constructor(public view:ViewController, public navParams: NavParams) {
  }
  closeModal(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvertModalPage');
  }

}
