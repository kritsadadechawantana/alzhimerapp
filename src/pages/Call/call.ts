import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App } from 'ionic-angular';
import { InfouserPage } from '../infouser/infouser';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';


/**
 * Generated class for the ShowmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call',
  templateUrl: 'call.html',
})
export class CallPage {
  public resposeData: any;
  public data: any;
  public sid: any;
  public iduser:any
 
  userDatap = {
    "id_patient": ""
  };
  userDetails = { "user_id": "" };



  constructor(public app: App, private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider, public toastCtrl: ToastController) {
    this.storage.get('userdata').then((val) => {
      var val = JSON.parse(val);
      this.userDetails.user_id = val;
      this.sid = this.userDetails.user_id;
      this.getAccount();
    });
    this.iduser = navParams.get('datauser')
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad kyfmjhf,Page');
  }


  ionViewDidEnter() {
    console.log('ionViewDidLoad ShowmePage');
    this.getAccount();
  }
 
  getAccount() {
    this.userDatap.id_patient = this.sid;
    this.authService.PostData(this.userDatap, "getAccountPatient").then((result) => {
      this.resposeData = result;
      if (this.resposeData.patient) {
        this.data = this.resposeData.patient;
      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }

  tel1(phone:any) {
    console.log(phone);
    window.open('tel:' + phone, '_system');
    
  }
  tel2() {
    window.open('tel:' + '1669', '_system');
  }
}


