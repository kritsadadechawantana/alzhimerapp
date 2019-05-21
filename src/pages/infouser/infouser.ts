import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SN1 } from '../sn1/sn1';
import { ShowmePage } from '../showme/showme';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-infouser',
  templateUrl: 'infouser.html',
})
export class InfouserPage {
  status: string = null;
  public resposeData: any;
  public data: any;
  public editUser: any;
  public infouser: any;
  public sid: any;
  public x: string = "aaaaa"
  userDatap = {
    "id_patient": null
  };
  userId: string = null;
  public id: any
  public getid: any;
  public dataUser = {
    "id_patient": null,
    "name_patient": null,
    "gender_patient": null,
    "weight_patient": null,
    "height_patient": null,
    "year_patient": null,
    "hisdrug_patient": null,
    "dis_patient": null,
    "doc_patient": null,
    "hos_patient": null,
    "doctel_patient": null,
    "tel_patient": null
  };
  userDetails = { "user_id": "" };
  constructor(public alertCtrl: AlertController, public app: App, private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider, public toastCtrl: ToastController) {
    this.status = navParams.get('status');
    this.getid = navParams.get('id');
    this.userDatap.id_patient = this.getid;
    this.dataUser.id_patient = navParams.get('id');
    if (this.status == "blank") {
      this.dataUser.id_patient = navParams.get('id');;
    } else {
      this.storage.get('userData').then((val) => {
        var val = JSON.parse(val);
        this.userDetails.user_id = val;
        this.sid = this.userDetails.user_id;
        this.getid = navParams.get('id');
        this.getAccount();

      });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfouserPage');
  }
  gosn1() {
    this.navCtrl.push(SN1);
  }

  openGallery() {
    //const option 
  }
  getAccount() {
    this.userDatap.id_patient = this.getid;
    console.log(this.userDatap);
    this.authService.PostData(this.userDatap, "getAccountPatient").then((result) => {
      this.resposeData = result;
      if (this.resposeData.patient) {
        this.data = this.resposeData.patient;
        this.infouser = this.data
        this.dataUser.name_patient = this.data[0].name_patient;
        this.dataUser.gender_patient = this.data[0].gender_patient;
        this.dataUser.weight_patient = this.data[0].weight_patient;
        this.dataUser.height_patient = this.data[0].height_patient;
        this.dataUser.year_patient = this.data[0].year_patient;
        this.dataUser.hisdrug_patient = this.data[0].hisdrug_patient;
        this.dataUser.doc_patient = this.data[0].doc_patient;
        this.dataUser.tel_patient = this.data[0].tel_patient;
        this.dataUser.dis_patient = this.data[0].dis_patient;
        this.dataUser.hos_patient = this.data[0].hos_patient;
        this.dataUser.doctel_patient = this.data[0].doctel_patient;
        this.dataUser.tel_patient = this.data[0].tel_patient;
      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }

  editinfo() {
    this.authService.PostData(this.dataUser, "editAccountPatient").then((result) => {
      this.resposeData = result;
      console.log(result)
      if (this.resposeData.pattient) {
        console.log(this.resposeData, "sss");
      }
      else {
        console.log(this.resposeData, "not conn");
      }
      const alert2 = this.alertCtrl.create({
        title: 'บันทึกข้อมูลสำเร็จ',
        buttons: [{
          text: 'ตกลง',
          handler: data => {
            if (this.status == "blank") {
              this.navCtrl.setRoot(SN1);
            } else {
              this.navCtrl.pop();
            }
          }
        }
        ]
      });
      alert2.present();

    }, (err) => {
      console.error(err);
    });
  }
}
