import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Navbar, AlertController } from 'ionic-angular';
import { CreatethemePage } from '../createtheme/createtheme';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';
import { P6Page } from '../p6/p6';

/**
 * Generated class for the QapostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qapost',
  templateUrl: 'qapost.html',
})
export class QapostPage {
  getPost_Topic: any
  getPost_Detail: any
  getIdPost: any
  who_Online: string;
  userData = {
    "id_comment": 0,
    "id_doctor": "",
    "id_patient": "",
    "comment_detail": "",
    
    "date_comment": "",
    "id_post": "",
    "post_name": "",
    "name_comment": "",
    "date_comments": "df",
    "time_comments":null

  };
  userDatap = {
    "id_patient": "",
    "id_doctor": "",
    "id_comment": "",
    "id_post": "",
    "post_name": "",

  };

  online = {
    "user_id": ""
  }
  public resposeData: any;
  userDetails = { "user_id": "" };
  public sid: any;
  public data: any;
  items: any;
  public iduser: string;
  id_Online: string = null;
  name_Online: string = null;
  bin: any;
  type_Online: string=null;
  public id_Comment: string;
  constructor(public alertCtrl: AlertController, public app: App, public storage: Storage, public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

    this.getPost_Topic = navParams.get('post_topic')
    this.getPost_Detail = navParams.get('post_detail')
    this.getIdPost = navParams.get('idPost')
    this.id_Online = navParams.get('id_Online');
    this.name_Online = navParams.get('name_Online');
    this.bin = navParams.get('id_patient');
    this.type_Online = navParams.get('type_Online');
    console.log("id_online is " + this.id_Online);
    console.log("name_online is " + this.name_Online);
    console.log("bin " + this.bin);
    console.log("type_online" + this.type_Online);

    // this.who_Online = navParams.get('name_comment');
    // console.log(this.getPost_Topic);
    // console.log(this.getPost_Detail);
    // console.log(this.getIdPost);
    // console.log("who"+this.who_Online);

    this.userData.id_post = this.getIdPost

    this.storage.get('userData').then((val) => {
      var val = JSON.parse(val);
      this.userDetails.user_id = val;
      this.sid = this.userDetails.user_id;
      console.log('ionViewDidLoa  d QapostPageconStuc');
      this.getpost();
    });


    this.storage.get('userdata').then((val) => {
      var val = JSON.parse(val);
      this.online.user_id = val;
      this.sid = this.online.user_id;
      this.getAccount();
    });
    this.iduser = navParams.get('datauser')

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad QapostPage');
    // console.log("who"+this.who_Online);
  }
  ionViewCanEnter() {
    this.userData.id_post = this.getIdPost
    this.userDatap.id_post = this.getIdPost
    this.storage.get('userData').then((val) => {
      var val = JSON.parse(val);
      this.userDetails.user_id = val;
      this.sid = this.userDetails.user_id;
      // console.log('ionViewDidLoa  d QapostPageconStuc');
      this.get();
      this.getpost();
    });
  }
  get() {
    this.getPost_Topic = this.navParams.get('post_topic')
    this.getPost_Detail = this.navParams.get('post_detail')
    this.getIdPost = this.navParams.get('idPost')
    // console.log(this.getPost_Topic);
    // console.log(this.getPost_Detail);
    // console.log(this.getIdPost);

    this.userData.id_post = this.getIdPost
    this.userDatap.id_post = this.getIdPost
    this.storage.get('userData').then((val) => {
      var val = JSON.parse(val);
      this.userDetails.user_id = val;
      this.sid = this.userDetails.user_id;
      console.log('ionViewDidLoa  d QapostPageconStuc');
      this.getpost();
    });
  }
  create() {
    var date=new Date();
    this.userData.date_comments=date.getDay()+"-"+date.getMonth()+"-"+date.getFullYear();
    this.userData.time_comments=date.getHours()+":"+date.getMinutes();
    this.userData.name_comment = this.name_Online;
    console.log(this.userData);
    if (this.type_Online != "2") {
      this.userData.id_patient = this.id_Online;
    } else { 
      this.userData.id_patient = this.bin;
    }

    if (this.userData.comment_detail != "") {
      this.authService.PostData(this.userData, "AddComment").then((result) => {
        this.resposeData = result;
        console.log(this.resposeData)
        // this.navCtrl.pop();
        this.get();
        this.userData.comment_detail = "";
      }, (err) => {
        console.error(err);
      });

    }

  }
  getpost() {
    this.userDatap.id_doctor = this.sid;
    this.authService.PostData(this.userData, "getComment").then((result) => {
      this.resposeData = result;
      console.log(result)
      if (this.resposeData.pattient) {
        this.data = this.resposeData.pattient;
        this.items = this.data;

      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }

  del() {

    const alert = this.alertCtrl.create({
      title: 'ต้องการลบกระทู้หรือไม่',
      buttons: [
        {
          text: 'ยกเลิก'
        }, {
          text: 'ตกลง',
          handler: data => {
            this.authService.PostData(this.getIdPost, "deletePost").then((result) => {
              this.resposeData = result;
              console.log(result)
              this.navCtrl.pop();
            }, (err) => {
              console.error(err);
            });
            console.log("deleted!");
          }
        }
      ],
      enableBackdropDismiss: false,
    });
    alert.present();




  }

  delComment(id_comment: string) {
    this.id_Comment = id_comment;
    console.log("id comment "+this.id_Comment);
    const alert = this.alertCtrl.create({
      title: 'ต้องการลบคอมเม้นต์หรือไม่',
      buttons: [
        {
          text: 'ยกเลิก'
        }, {
          text: 'ตกลง',
          handler: data => {
            this.authService.PostData(this.id_Comment, "deleteComment").then((result) => {
              this.resposeData = result;
              console.log(result)
              this.getpost();
            }, (err) => {
              console.error(err);
            });
            console.log("deleted!");
          }
        }
      ],
      enableBackdropDismiss: false,
    });
    alert.present();
  }


  getAccount() {
    this.userDatap.id_patient = this.sid;
    console.log(this.userDatap);
    this.authService.PostData(this.userDatap, "getAccountPatient").then((result) => {
      this.resposeData = result;
      if (this.resposeData.patient) {
        this.data = this.resposeData.patient;
        //this.infouser = this.data;
      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }

}

