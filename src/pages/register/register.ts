import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AuthServiceProvider } from '../../providers/auth-service';
import { ResultsymPage } from '../resultsym/resultsym';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  userData = {
    "username": "",
    "password": "",
    "name": "",
    "status": "",
    "confirmPassword": "",
    "email" :""
  };
  public resposeData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthServiceProvider,public toastCtrl:ToastController) {
  }
  register(){
    if(this.userData.name && (this.userData.password==this.userData.confirmPassword) 
    && this.userData.username && this.userData.email){
     
     this.authService.PostData(this.userData, "register").then((result) =>{
       this.resposeData = result;
       console.log(this.resposeData);
       if(this.resposeData.userData){
         this.navCtrl.push(HomePage)
       
       }
       else{
         this.presentToast("กรุณาตรวจสอบข้อมูลให้ถูกต้อง");
        
       }
      }, (err) => {
        this.presentToast("ไม่สามารถเชื่อมต่ออินเตอร์เน็ต");
      });
    }
      else{

    this.presentToast("กรุณากรอกข้อมูลให้ครบถ้วน และตรวจสอบรหัสผ่านไม่ถูกต้อง")
      }
  }
    
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  backhome(){
    this.navCtrl.push(HomePage);
  
  }

  presentToast(msg) {
    let toast = this
      .toastCtrl
      .create({message: msg, duration: 2000});
    toast.present();
  }
  
}