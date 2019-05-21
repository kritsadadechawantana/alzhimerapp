import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';
import { ShowdrugPage } from '../showdrug/showdrug';

/**
 * Generated class for the EditdrugPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editdrug',
  templateUrl: 'editdrug.html',
})
export class EditdrugPage {
  // getType: any
  // getName: any
  // getAlarm: any
  // getTime: any
  // getDate: any
  // getDateend: any
  // getIddrug: any
  data: any;
  user = {
    id: null
  }
  drug = {
    id: null
  }
  public resposeData: any;
  userDetails = { "user_id": "" };
  public sid: any;
  dStart: string;
  dStop: string;
  dateStart = [];
  dateStop = [];
  t: string;
  time = [];
  userData = {
    "id": null,
    "drug_type": null,
    "drug_name": null,
    "drug_alarm": null,
    "drug_time": null,
    "drug_date": null,
    "drugend_date": null,
    "id_patient": null
  };

  constructor(public alertCtrl: AlertController, public app: App, public storage: Storage, public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.storage.get('userdata').then((val) => {
      var val = JSON.parse(val);
      this.userDetails.user_id = val;
      this.sid = this.userDetails.user_id;
      console.log(this.sid);
    });
    // this.getType = navParams.get('typed')
    // this.getName = navParams.get('named')
    // this.getAlarm = navParams.get('alarmd')
    // this.getTime = navParams.get('timed')
    // this.getDate = navParams.get('dated')
    // this.getDateend = navParams.get('dateendd')
    // this.getIddrug = navParams.get('idDrug')
    // this.user.id=navParams.get('userId');
    // console.log("user id "+this.user.id);
    this.drug.id = navParams.get('drugId');
    console.log("drug id is : " + this.drug.id);
    this.getDrug();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditdrugPage');
  }
  edit() {

    this.dateStart = [];
    this.dateStop = [];
    this.time = [];
    this.dateStart = this.dStart.split("-");
    this.dateStop = this.dStop.split("-");
    this.time = this.t.split(":");
    this.userData.drug_date = this.dateStart[2] + "-" + this.dateStart[1] + "-" + this.dateStart[0];
    this.userData.drugend_date = this.dateStart[2] + "-" + this.dateStart[1] + "-" + this.dateStart[0];
    this.userData.drug_time = this.time[0] + ":" + this.time[1];


    console.log(this.userData);
    this.authService.PostData(this.userData, "editdrug").then((it) => {
      this.resposeData = it
      if (this.resposeData.pattient) {
        console.log(this.resposeData, "sss");
        //this.navCtrl.pop();
      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    }); 
    this.navCtrl.pop();


  }
  del() {
    const alert = this.alertCtrl.create({
      title: 'ต้องการลบหรือไม่',
      buttons: [
        {
          text: 'ตกลง',
          handler: data => {
            console.log(this.drug.id);
            this.authService.PostData(this.drug.id, "deleteDrug").then((result) => {
              this.navCtrl.pop();
            }, (err) => {
              console.error(err);
            });
          }

        }, {
          text: 'ยกเลิก'
        }
      ],
      enableBackdropDismiss: false
    });
    alert.present();

  }

  getDrug() {
    this.drug.id = this.navParams.get('drugId');
    this.authService.PostData(this.drug, "getDrugById").then((result) => {
      this.resposeData = result;
      if (this.resposeData.patient) {
        this.data = this.resposeData.patient;
        console.log(this.data);
        this.userData.id = this.data[0].id;
        this.userData.drug_type = this.data[0].drug_type;
        this.userData.drug_time = this.data[0].drug_time;
        this.userData.drug_name = this.data[0].drug_name;
        this.userData.drug_alarm = this.data[0].drug_alarm;
        this.time = this.data[0].drug_time.split(":");
        this.t = this.time[0] + ":" + this.time[1] + ":" + "00";
        console.log("drug_time" + this.t);
        this.dateStart = this.data[0].drug_date.split("-");
        this.dStart = this.dateStart[2] + "-" + this.dateStart[1] + "-" + this.dateStart[0];

        this.dateStop = this.data[0].drugend_date.split("-");
        this.dStop = this.dateStop[2] + "-" + this.dateStop[1] + "-" + this.dateStop[0];



      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }



}

