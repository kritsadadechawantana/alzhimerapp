import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App, AlertController } from 'ionic-angular';
import { P2Page } from '../p2/p2';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';
import { ShowCalendarPage } from '../show-calendar/show-calendar';
import { FormGroup } from '@angular/forms';
/**
 * Generated class for the ResultsymPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultsym',
  templateUrl: 'resultsym.html',
})
export class ResultsymPage {
  testCheckboxOpen: boolean;
  testCheckboxResult;
  public resposeData: any;
  public resposeDats: any;
  public data: any;
  sev: any
  public sid: any;

  userData = {
    "data_dat": "8",
    "one": "",
    "two": "",
    "tree": "",
    "four": "",
    "five": "",
    "six": "",
    "seven": "",
    "id_patient": "id_patient"
  };

  userDatap = {
    "id_patient": "8"

  };

  one: boolean = false;
  two: boolean = false;
  tree: boolean = false;
  four: boolean = false;
  five: boolean = false;
  six: boolean = false;
  seven: boolean = false;
  pushData = {
    "data_dat": "",
    "one": "",
    "two": "",
    "tree": "",
    "four": "",
    "five": "",
    "six": "",
    "seven": "",
    "id_patient": ""
  };


  id: any;
  userDetails = { "user_id": "" };

  userDatails = {
    "user_id": ""
  };
  user={
    "id_patient":"8"
  }

  public getData: any;
  public dataid: any;

  userId: string = null;
  constructor(public alertCtrl: AlertController, public app: App, private storage: Storage, public navCtrl: NavController, public navParams: NavParams,
    public authService: AuthServiceProvider, public toastCtrl: ToastController) {
    this.userId = navParams.get('userId');
    console.log("userId is"+this.userId);
    // this.storage.get('userdata').then((val) => {
    //   var val = JSON.parse(val);
    //   this.userDetails.user_id = val;
    //   this.sid = this.userDetails.user_id;
    //  // this.getAccount();
    // });
    // console.log("sid>>"+this.sid)
    // this.storage.get('userData').then((val) => {
    //   var val = JSON.parse(val);
    //   this.userDetails.user_id = val;
    //   this.sid = this.userDetails.user_id;


    //   // this.userDatap.id_patient = navParams.get('id')
    //   // console.log(this.userDatap);
    //   // this.id = this.userDatap.id_patient;
    //   console.log("sid >"+this.sid );

    //this.getActivity();

    // });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsymPage');
    this.getActivity();
  }

  ionViewDidEnter() {
    this.getActivity();
  }
  gop2() {
    this.navCtrl.push(P2Page);
  }


  getActivity() {
   // this.user.id_patient = this.userId;
    this.authService.PostData(this.user, "showActivity").then((result) => {
      this.resposeData = result;
      if (this.resposeData.pattient) {
        this.data = this.resposeData.pattient;
        console.log(this.data);
        console.log(this.resposeData);
      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }

  delActivity() {
    const alert = this.alertCtrl.create({
      title: 'ต้องการลบข้อมูลหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก'
        }, {
          text: 'ตกลง',
          handler: data => {
            console.log(this.userData)
            this.authService.PostData(this.userData, "delActivity").then((result) => {
              this.resposeData = result;
              console.log(this.resposeData);
              if (this.resposeData.pattient) {
                this.presenToast("ลบข้อมูลเรียบร้อยแล้ว");
              }
              else {
                this.presenToast("ลบข้อมูลไม่ได้");
              }
              this.getActivity();
              // this.navCtrl.push(ResultsymPage);
            }, (err) => {
            });
          }
        }
      ]
    });
    alert.present();
  }


  presenToast(msg) {
    let toast = this
      .toastCtrl
      .create({ message: msg, duration: 2000 });
    toast.present();
  }

  addActivity() {
    let alert = this.alertCtrl.create();
    alert.setTitle('บันทึกอาการ');
    alert.addInput({
      type: 'checkbox',
      label: 'อาการปวดหัว',
      value: 'value1'
    });
    alert.addInput({
      type: 'checkbox',
      label: 'อาเจียน',
      value: 'value2'
    });
    alert.addInput({
      type: 'checkbox',
      label: 'ก้าวร้าว ดุดัน',
      value: 'value3'

    });
    alert.addInput({
      type: 'checkbox',
      label: 'ลืมชื่อหรือลืมว่ากำลังทำอะไร',
      value: 'value4'
    });
    alert.addInput({
      type: 'checkbox',
      label: 'นอนไม่หลับ',
      value: 'value5'
    });
    alert.addInput({
      type: 'checkbox',
      label: 'ปัสสาวะราด',
      value: 'value6'
    });
    alert.addInput({
      type: 'checkbox',
      label: 'ทำร้ายตนเองหรือผู้อื่น',
      value: 'value7'
    });
    alert.addButton(
      'ยกเลิก'
    );
    alert.addButton({
      text: 'เพิ่ม',
      handler: data => {
        // console.log(data.value1);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
        console.log("testCheckboxResult" + this.testCheckboxResult);
        if (this.testCheckboxResult.length > 0) {


          for (let index = 0; index < 7; index++) {
            this.testCheckboxResult[index]
            if (this.testCheckboxResult[index] == 'value1') {
              this.userData.one = "false"

            } if (this.testCheckboxResult[index] == 'value2') {
              this.userData.two = "false"

            } if (this.testCheckboxResult[index] == 'value3') {
              this.userData.tree = "false"

            } if (this.testCheckboxResult[index] == 'value4') {
              this.userData.four = "false"

            } if (this.testCheckboxResult[index] == 'value5') {
              this.userData.five = "false"

            } if (this.testCheckboxResult[index] == 'value6') {
              this.userData.six = "false"

            } if (this.testCheckboxResult[index] == 'value7') {
              this.userData.seven = "false"
            }
          }
          this.authService.PostData(this.userData, "addActivity").then((result) => {
            this.resposeData = result;
            console.log(this.resposeData);
            this.getActivity();
            if (this.resposeData.pattient) {
              this.presenToast("เพิ่มข้อมูลเรียบร้อยแล้ว");
              this.userData.one = "";
              this.userData.two = "";
              this.userData.tree = "";
              this.userData.four = "";
              this.userData.five = "";
              this.userData.six = "";
              this.userData.seven = "";
            }
            else {
              this.presenToast("เพิ่มข้อมูลไม่ได้");

            }
          }, (err) => {

          });
        }
      }
    });

    alert.present();


  }

  toCalendar() {
    this.navCtrl.push(ShowCalendarPage);
  }

}
