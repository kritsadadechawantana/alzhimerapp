import { Component, state } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { SN1 } from '../sn1/sn1';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';
import { LocalNotifications,  } from '@ionic-native/local-notifications';
/**
 * Generated class for the P4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p4',
  templateUrl: 'p4.html',
})
export class P4Page {
  userData = {
    "id_patient": "",
    "name_hospital": "",
    "name_docter": "",
    "dat_date": "",
    "dat_time": ""
  };
  userDatap = {
    "id_patient": "",
    "id_doctor": ""
  };
  public resposeData: any;
  public sid: any;
  public date1: string
  userDetails = { "user_id": "" };
  date;
  dateSplit=[];
  constructor(public alertCtrl: AlertController, private storage: Storage, private localNoti: LocalNotifications, private platform: Platform, public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

    this.storage.get('userdata').then((val) => {
      var val = JSON.parse(val);
      this.userDetails.user_id = val
      this.sid = this.userDetails.user_id
      console.log(this.sid);

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad P4Page');
  }
  backhomee() {
    this.navCtrl.push(SN1);
  }
  create() {
    if (this.userData.name_hospital != "" && this.userData.name_docter != "") {
      this.userData.id_patient = this.sid
      console.log(this.userData);
      this.dateSplit=this.date.split("-");
      this.userData.dat_date=this.dateSplit[2]+"-"+this.dateSplit[1]+"-"+this.dateSplit[0];
      this.authService.PostData(this.userData, "adddatdoc").then((result) => {
        this.resposeData = result;
        console.log(this.resposeData);
        let date1 = new Date(this.userData.dat_date + " " + this.userData.dat_time);
        console.log(date1);
        this.localNoti.schedule({
          id : 1,
          title: 'การแจ้งเตือน',
          text: 'วันนี้หมอนัด อย่าลืมไปตามนัดนะคะ',
          at: new Date(new Date().getTime() + 5 * 5000)
          // at: new Date(new Date().getTime() + 3600)
          //   // this.userData.dat_time
          // },
          // at : this.date1,
          

        });

        this.navCtrl.pop();
      });
    } else {
      const alert = this.alertCtrl.create({
        title: 'กรอกข้อมูลไม่ครบ',
        subTitle: 'กรุณากรอกข้อมูลให้ครบทุกช่อง',
        buttons: ['ตกลง'],
        enableBackdropDismiss:false,
      });
      alert.present();
    }
    

  }
 /* noti() {
    console.log(this.userData);
    var date = new Date(this.userData.dat_date + " " + this.userData.dat_time);
    this.platform.ready().then(() => {
      this.localNoti.schedule({
        title: 'การแจ้งเตือน',
        text: 'วันนี้หมอนัด อย่าลืมไปตามนัดนะคะ',
        //trigger: { at: new Date(new Date().getTime() + 3600) },
        at: { in: 5, },
        icon: '3.png',
        sound: null
      });
    });
  }*/
test(){
  console.log(this.date);
}

}
