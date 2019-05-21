import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController,App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the ShowdatapatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showdatapat',
  templateUrl: 'showdatapat.html',
})
export class ShowdatapatPage {
  getHospital:any
  getName:any
  getDate:any
  getTime:any

  constructor(public app: App,public storage:Storage,public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getHospital = navParams.get('hospitald')
    this.getName = navParams.get('named')
    this.getDate = navParams.get('dated')
    this.getTime = navParams.get('timed')
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowdatapatPage');
  }

}
