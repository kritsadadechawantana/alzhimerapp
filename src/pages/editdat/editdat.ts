import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';
import { ShowdocPage } from '../showdoc/showdoc';

/**
 * Generated class for the EditdatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editdat',
  templateUrl: 'editdat.html',
})
export class EditdatPage {
  getNamehospital: any
  getNamedoc: any
  getDate: any
  getTime: any
  getIddatdoc: any
  resposeData: any;
  newDate=[];
  newD:string;
  userData = {
    "id_datdoc": '',
    "name_hospital": "",
    "name_docter": "",
    "dat_date": "",
    "dat_time": "",
    "id_patient": ""
  };
  date;
  dateSplit=[];
  time:string;
  timeSplit=[];

  constructor(public alertCtrl: AlertController, public app: App, public storage: Storage, public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getNamehospital = navParams.get('namehospitald')
    this.getNamedoc = navParams.get('namedocd')
    this.getDate = navParams.get('dated')
    this.time = navParams.get('timed')
    this.getIddatdoc = navParams.get('idDatdoc')
    this.dateSplit=this.getDate.split("-");
    this.newD=this.dateSplit[2]+"-"+this.dateSplit[1]+"-"+this.dateSplit[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditdatPage');
  }
  editdata() {
    this.dateSplit=[];
    this.userData.id_datdoc = this.getIddatdoc
    this.userData.name_hospital = this.getNamehospital
    this.userData.name_docter = this.getNamedoc
    this.userData.dat_date = this.getDate
    this.userData.dat_time = this.getTime
    console.log(this.userData);
    this.dateSplit=this.newD.split("-");
    this.userData.dat_date=this.dateSplit[2]+"-"+this.dateSplit[1]+"-"+this.dateSplit[0];
    this.timeSplit=this.time.split(":");
    this.userData.dat_time=this.timeSplit[0]+":"+this.timeSplit[1];
    this.authService.PostData(this.userData, "editdatdoctor").then((result) => {
      this.resposeData = result;
      console.log(result)
      if (this.resposeData.pattient) {
        console.log(this.resposeData, "sss");

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
      title: 'ต้องการลบข้อมูลหรือไม่',
      buttons: [
        {
          text: 'ตกลง',
          handler: data => {
            this.authService.PostData(this.getIddatdoc, "deleteDatdoc").then((result) => {
              this.resposeData = result;
              console.log(result)
              this.navCtrl.pop();
            }, (err) => {
              console.error(err);
            });
          }
        }, {
          text: 'ยกเลิก'
        }
      ],
      enableBackdropDismiss: false,
    });
    alert.present();

  }

}
