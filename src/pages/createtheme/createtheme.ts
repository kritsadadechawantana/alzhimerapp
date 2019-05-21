import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { P6Page } from '../p6/p6';
// import { StorydocPage } from '../storydoc/storydoc';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';
// import { P5Page } from '../p5/p5';
// import { P4Page } from '../p4/p4';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the CreatethemePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createtheme',
  templateUrl: 'createtheme.html',
})
export class CreatethemePage {


  public resposeData: any;
  userDetails = { "user_id": "" };

  post = {
    "id_patient": null,
    "id_doctor": null,
    "id_post": 0,
    "post_topic": null,
    "post_detail": null,
    "post_status": null,
    "post_name": null,
    "date": null
  };
  id_Online: string = null;
  name_Online: string = null;
  status: string="public";
  constructor(private storage: Storage, public alertCtrl: AlertController, public authService: AuthServiceProvider, private localNoti: LocalNotifications, public navCtrl: NavController, public navParams: NavParams) {
    this.id_Online = navParams.get('id_Online');
    this.name_Online = navParams.get('name_Online');
    console.log("id online is " + this.id_Online);
    console.log("name online is " + this.name_Online);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatethemePage');

  }
  // back() {
  //   this.navCtrl.push(P6Page);
  // }
  create() {

    if (this.post.post_topic != null && this.post.post_detail != null) {
      this.post.post_name = this.name_Online;
      this.post.post_status=this.status;
      this.post.id_patient=this.id_Online;
      console.log("post.post_status"+this.post.post_status);
      this.authService.PostData(this.post, "addpost").then((result) => {
        this.resposeData = result;
        console.log(this.resposeData)
        this.localNoti.schedule({
          id: 3,
          title: 'การแจ้งเตือน',
          text: 'มีกระทู้ใหม่ล่าสุด',
          //trigger: {at:date1},
          icon: '3.png'
        });
        this.navCtrl.pop();
      });
    } else {
      const alert = this.alertCtrl.create({
        title: 'กรอกข้อมูลไม่ครบ',
        subTitle: 'กรุณากรอกข้อมูลให้ครบทุกช่อง',
        buttons: ['ตกลง'],
        enableBackdropDismiss: false,
      });
      alert.present();
    }
  }

  getUserData() {
    // if (this.userDetails.doctor_id == undefined) {
    //   console.log("Say yes")
    // } else if (this.userDetails.doctor_id != undefined) {

    // } else if (this.userDetails.user_id == undefined) {

    // } else if (this.userDetails.user_id !== undefined) {
    //  // this.getAccount();
    // }

  }
  test(){
    
      console.log("status"+this.status)
    
  }
}
