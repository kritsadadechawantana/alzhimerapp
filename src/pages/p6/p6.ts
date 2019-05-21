import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { SN1 } from '../sn1/sn1';
import { CreatethemePage } from '../createtheme/createtheme';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';
import { QapostPage } from '../qapost/qapost';

/**
 * Generated class for the P6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p6',
  templateUrl: 'p6.html',
})
export class P6Page {

  ionViewDidLoad() {
    console.log('ionViewDidLoad P6Page');
  }

  public posts: any;
  public resposeData: any;
  public data: any;

  post = {
    "id_patient": "",
    "id_doctor": "",
    "post_name": ""
  };

  id_Online: string;
  name_Online: string;
  type_Online: string;

  user = {
    "user_id": ""
  }
  public sid: any;

  constructor(public app: App, public storage: Storage, public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.id_Online = navParams.get('id');
    this.name_Online = navParams.get('name');
    this.type_Online = navParams.get('type_Online');
 
    console.log('ionViewDidLoa  d P6PageconStuc');
    console.log("id_onling" + this.id_Online);
    console.log("name_online" + this.name_Online);
    console.log("online_Type is " + this.type_Online);



    this.showPost();
    this.getUserId()

  }
  ionViewDidEnter() {
    console.log('ionViewWillEnter P6Page');
    this.showPost();
  }

  showPost() {
    //  this.getPost.id_doctor = this.sid;
    this.authService.PostData(this.post, "getpost").then((result) => {
      this.resposeData = result;
      console.log("result" + result)
      if (this.resposeData.pattient) {
        this.data = this.resposeData.pattient;
        this.posts = this.data;
      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }


  read(id: string, a1: string
    , a2: string
    , id_patient: string
  ) {
    this.navCtrl.push(QapostPage, {
      idPost: id
      , post_topic: a1
      , post_detail: a2
      , id_Online: this.id_Online
      , name_Online: this.name_Online
      , id_patient: id_patient
      , type_Online:this.type_Online
    })
    console.log("id patient"+id_patient);
  }





  create() {
    this.navCtrl.push(CreatethemePage, { id_Online: this.id_Online, name_Online: this.name_Online });
  }

  getUserId() {
    this.storage.get('userdata').then((val) => {
      var val = JSON.parse(val);
      this.user.user_id = val;
      this.sid = this.user.user_id;
      console.log("user id " + this.sid);
    });
  }


  getAccount() {
    // this.user.id_patient = this.userId;
    //    this.authService.PostData(this.user, "getAccountPatient").then((result) => {
    //      this.resposeData = result;
    //      if (this.resposeData.patient) {
    //        this.data = this.resposeData.patient;
    //        this.infouser = this.data

    //      }
    //      else {
    //        console.log(this.resposeData, "not conn");
    //      }
    //    }, (err) => {
    //      console.error(err);
    //    });
  }

  // whoIsLogin() {
  //   if(this.type_Online=="1"){
  //     this.show="false"
  //   }else{
  //     this.show="tr"
  //   }
  // }

}
