import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SN1 } from '../sn1/sn1';
import { ResultsymPage } from '../resultsym/resultsym';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';
import { ShowCalendarPage } from '../show-calendar/show-calendar';

/**
 * Generated class for the P2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p2',
  templateUrl: 'p2.html',
})
export class P2Page {
  userData = {
    "data_dat": "",
    "one": false,
    "two": false,
    "tree": false,
    "four": false,
    "five": false,
    "six": false,
    "seven": false,
    "id_patient": ""
  };
  one: boolean = true;
  two: boolean = false;
  tree: boolean = false;
  four: boolean = false;
  five: boolean = false;
  six: boolean = false;
  seven: boolean = false;


  public resposeData: any;
  userDatails = {
    "user_id": ""
  };
  public getData: any;
  public dataid: any;
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider, public toastCtrl: ToastController) {
    this.storage.get('userdata').then((val) => {
      var val = JSON.parse(val);
      this.userDatails.user_id = val;
      this.userData.id_patient = this.userDatails.user_id;
      this.getData = navParams.get('datauser');
      console.log(this.getData);
      console.log(this.userData.id_patient);
    });
  }


  
  presenToast(msg) {
    let toast = this
      .toastCtrl
      .create({ message: msg, duration: 2000 });
    toast.present();
  }
  AddActivity() {

    console.log(this.userData)
    this.authService.PostData(this.userData, "addActivity").then((result) => {
      this.resposeData = result;
      console.log(this.resposeData);
      if (this.resposeData.pattient) {
        this.presenToast("เพิ่มข้อมูลเรียบร้อยแล้ว");
      }
      else {
        this.presenToast("เพิ่มข้อมูลไม่ได้");

      }
    }, (err) => {

    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad P2Page');
  }
  backhomee() {
    this.navCtrl.push(SN1);
  }
  gosu() {
    this.dataid = this.userData.id_patient
    console.log(this.dataid);
    this.navCtrl.push(ResultsymPage, { id: this.dataid });
  }
  toCalendar() {
    this.navCtrl.push(ShowCalendarPage);
  }

}
