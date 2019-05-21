import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController, LoadingController, App, ToastController } from 'ionic-angular';
import { SN1 } from '../sn1/sn1'
import { RegisterPage } from '../register/register';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';
import { MenudoctorPage } from '../menudoctor/menudoctor';
import { ForgotpassPage } from '../forgotpass/forgotpass';
import { InfouserPage } from '../infouser/infouser';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  data: any

  resposeData: any;
  userData = {
    "username": "",
    "password": ""
  };
  public LoginID: any;
  public profile: any;
  userParam: any;
  status: string = "blank"
  constructor(private storage: Storage, public app: App, public navCtrl: NavController, public authService: AuthServiceProvider, public toastCtrl: ToastController, public navParams: NavParams, public menu: MenuController, private modal: ModalController, public loadingCtrl: LoadingController) {
    menu.enable(true);
  }


  generateSN1() {
    this.navCtrl.push(SN1);
  }
  login() {
    if (this.userData.username && this.userData.password) {
      this.authService.PostData(this.userData, "login").then((result) => {
        this.resposeData = result;
        //console.log(this.resposeData);
        if (this.resposeData.Doctor) {
          this.profile = this.resposeData.Doctor;
          this.LoginID = this.profile[0].id_doctor;
          this.storage.set("userData", this.LoginID);
          // localStorage.setItem('userData', JSON.stringify(this.resposeData))
          this.navCtrl.setRoot(MenudoctorPage, this.resposeData.Doctor);

        } else if (this.resposeData.patient) {
          this.profile = this.resposeData.patient;
          this.LoginID = this.profile[0].id_patient;
          this.storage.set("userdata", this.LoginID);
          this.data = this.resposeData.patient;
         this.navCtrl.setRoot(SN1, this.resposeData.patient);
          localStorage.setItem('userdata', JSON.stringify(this.resposeData))
          //this.navCtrl.setRoot(SN1, this.resposeData.patient);

        } else {
          this.presentToast("กรุณาตรวจสอบชื่อผู้ใช้งานเเละรหัสผ่านให้ถูกต้อง");
        }
      }, (err) => {
        this.presentToast("กรุณาเปิดใช้งานอินเตอร์เน็ตด้วยค่ะ");
      });
    } else {
      this.presentToast("กรุณากรอกอีเมล์เเละรหัสผ่าน");
    }

  }
  presentToast(msg) {
    let toast = this
      .toastCtrl
      .create({ message: msg, duration: 2000 });
    toast.present();
  }
  openModal() {
    const myModal = this.modal.create('ModalPage');

    myModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  goToPrePlay() {

  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "กรุณารอสักครู่....",
      duration: 3000
    });
    loader.present();
  }
  nextregister() {
    this.navCtrl.push(RegisterPage);

  }
  forgot() {
    this.navCtrl.push(ForgotpassPage);

  }
}
