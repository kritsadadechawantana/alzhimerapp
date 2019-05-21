import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SN1 } from '../sn1/sn1';
import { AuthServiceProvider } from '../../providers/auth-service';
import { ShowdrugPage } from '../showdrug/showdrug';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { t } from '@angular/core/src/render3';
/**
 * Generated class for the P3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p3',
  templateUrl: 'p3.html',
})
export class P3Page {
  userData = {
    "id": 0,
    "drug_type": "",
    "drug_name": "",
    "drug_alarm": "",
    "drug_time": "",
    "drug_date": "",
    "drugend_date": "",
    "id_patient":"",
  };
  userDatap = {
    "id_patient": "",
    "id_doctor": ""
  };
    dStart:any;
    dStop:any;
    dateStart=[]
    dateStop=[]
    t:any;
    "time"=[];
  
  public timee: string
  public datee: string
  public date1: string
  public resposeData: any;
  userDetails = { "user_id": "" };
  public sid: any;
  

  constructor( public alertCtrl:AlertController,public authService: AuthServiceProvider, private localNoti: LocalNotifications, public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.storage.get('userdata').then((val) => {
      var val = JSON.parse(val);
      this.userDetails.user_id = val;
      this.sid = this.userDetails.user_id;
      console.log(this.sid);

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad P3Page');
  }
  backhomee() {
    this.navCtrl.pop();
  }
  savee() {
    if (this.userData.drug_name != ""&&this.t!=null&&this.userData.drug_type!=""&&this.time!=null&&this.dStart!=null&&this.dStop!=null&&this.userData.drug_alarm!=null) {


      this.userData.id_patient = this.sid
      // console.log(this.timee);
      // console.log(this.datee);
      // this.userData.drug_time = this.timee
      // this.userData.drug_date = this.datee
      this.dateStart=this.dStart.split("-");
      this.userData.drug_date=this.dateStart[2]+"-"+this.dateStart[1]+"-"+this.dateStart[0];
      this.dateStop=this.dStop.split("-");
      this.userData.drugend_date=this.dateStop[2]+"-"+this.dateStop[1]+"-"+this.dateStop[0];
      this.time=this.t.split(":");
      this.userData.drug_time=this.time[0]+":"+this.time[1];
      console.log(this.userData);
      this.authService.PostData(this.userData, "adddrug").then((result) => {
        console.log(result);
        this.resposeData = result;
        console.log(this.resposeData)
        let date1 = new Date(this.userData.drug_date + " " + this.userData.drug_time);
        var name = this.userData.drug_name + " " +this.userData.drug_alarm
        var t = this.userData.drug_time
        var ty = this.userData.drug_type
        console.log(date1);
        
        
        this.localNoti.schedule({
          id: 1,
          title: 'การแจ้งเตือนยา',
          text: 'อย่าลืมยา' +' '+ name +' '+'เวลา' + ' ' + t,
          at: new Date(new Date().getTime() + 5),
          icon: '3.png'

        });
        console.log(Date);
        this.navCtrl.pop();
      });
    }else{
      const alert=this.alertCtrl.create({
        title:'กรอกข้อมูลไม่ครบ',
        subTitle:'กรุณากรอกข้อมูลให้ครบทุกช่อง',
        buttons:['ตกลง'],
        enableBackdropDismiss:false,
      });
      alert.present();

    }
  
  }


  
}
