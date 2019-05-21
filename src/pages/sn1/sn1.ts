import { Component } from '@angular/core';
import { NavController, Events, ModalController, NavParams, AlertController } from 'ionic-angular';


import { P2Page } from '../p2/p2';

import { P5Page } from '../p5/p5';
import { P6Page } from '../p6/p6';
import { P7Page } from '../p7/p7';

import { ShowmePage } from '../showme/showme';
import { ShowdrugPage } from '../showdrug/showdrug';
import { ShowdocPage } from '../showdoc/showdoc';

import { MapPage } from '../map/map';
import { CallPage } from '../Call/call';


import { IonicPage, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { ResultsymPage } from '../resultsym/resultsym';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';
import { ShowCalendarPage } from '../show-calendar/show-calendar';
import { ShowSymtomsPage } from '../show-symtoms/show-symtoms';
import { InfouserPage } from '../infouser/infouser';
import { ContactPage } from '../contact/contact';
@Component({
  selector: 'page-sn1',
  templateUrl: 'sn1.html'

})
export class SN1 {
  // gaming: string = "n64";
  // gender: string = "f";
  // os: string;
  // music: string;
  // month: string;
  // year: number;
  // sn1: string = "page1";
  // isAndroid: boolean = false;
  // isSec1Enable:boolean
  // isSec2Enable:boolean
  // isSec3Enable:boolean
  // stepCondition:boolean
  public getParam: any;
  public getiduser: any;

  musicAlertOpts: { title: string, subTitle: string };
  userData = {
    "data_dat": "",
    "one": false,
    "two": false,
    "tree": false,
    "four": false,
    "five": false,
    "six": false,
    "seven": false,
    "id_patient": ""
  };
  public sid: any;
  public sname: any;
  public infouser: any;
  public data: any;
  one: boolean = true;
  two: boolean = false;
  tree: boolean = false;
  four: boolean = false;
  five: boolean = false;
  six: boolean = false;
  seven: boolean = false;


  public resposeData: any;
  userDatails = {
    "user_id": "",
    "user_name": ""
  };

  userDatap = {
    "id_patient": "",
    "name_patient": ""
  };
  user = {
    "id_patient": "",

  };
  status: string = "blank"
  public getData: any;
  public dataid: any;
  userId: string = null;
  type_Online: string = "1";
  
  constructor(public alertCtrl:AlertController,public authService: AuthServiceProvider, private storage: Storage, public navparam: NavParams, public navCtrl: NavController, private events: Events, private modal: ModalController) {
    this.getParam = navparam.get('datauser')
    this.storage.get('userdata').then((val) => {
      var val = JSON.parse(val);
      this.getData = navparam.get('datauser');
      this.userId = val;
      console.log("user Id is " + this.userId);
      this.getAccount();
      
    });





  }
  ionViewDidLoad() {
    console.log("name patient" + this.getParam);

  }


  goHome() {
    this.navCtrl.setRoot(HomePage);
  }

  stpSelect() {
    console.log('STP selected');
  }
  openModal() {
    const myModal = this.modal.create('ModalPage');

    myModal.present();
  }
  Convert() {
    const convert = this.modal.create('ConvertModalPage');
    convert.present();
  }
  info() {
    this.navCtrl.push(ShowmePage, { datauser: this.getParam, userId: this.userId });
  }
  // p2(){
  //   this.navCtrl.push(P2Page,{datauser:this.getParam});
  // } ไปหน้าโชว์่บันทึกข้อมูล
  // p2(){
  //   this.navCtrl.push(P2Page,{datauser:this.getParam});
  // }
  showdrug() {
    this.navCtrl.push(ShowdrugPage, { datauser: this.getParam });
  }
  showdoc() {
    this.navCtrl.push(ShowdocPage);
  }
  p5() {
    this.navCtrl.push(P5Page);
  }
  p6() {
    this.navCtrl.push(P6Page, { id: this.userId, name: this.data[0].name_patient, type_Online:this.type_Online });
 
  }
  p7() {
    this.navCtrl.push(P7Page);
  }
  p8() {
    this.navCtrl.push(CallPage);
  }
  maps() {
    this.navCtrl.push(MapPage);

  }
  contact(){
    this.navCtrl.push(ContactPage);
  }

  gosu() {
     this.dataid = this.userData.id_patient
    // console.log(this.dataid);
    // this.navCtrl.push(ResultsymPage, { userId: this.userId });
    this.navCtrl.push(ShowSymtomsPage,{ userId: this.userId,type_Online:this.type_Online });
  }


  te() {
    this.navCtrl.push(ResultsymPage, { userId: this.userId });
  }


  getAccount() {
    this.user.id_patient = this.userId;
    this.authService.PostData(this.user, "getAccountPatient").then((result) => {
      this.resposeData = result;
      if (this.resposeData.patient) {
        this.data = this.resposeData.patient;
        this.infouser = this.data
        console.log(this.infouser);

        if(this.infouser[0].gender_patient==null||this.infouser[0].weight_patient==null||this.infouser[0].height_patient==null||this.infouser[0].year_patient==null||
          this.infouser[0].hisdrug_patient==null||this.infouser[0].doc_patient==null||this.infouser[0].tel_patient==null||
          this.infouser[0].dis_patient==null||this.infouser[0].hos_patient==null||this.infouser[0].doctel_patient==null){
          const alert =this.alertCtrl.create({
            title:'ผู้ใช้ใหม่',
            subTitle:'กรุณากรอกข้อมูล',
            buttons:[
              {
                text:'ตกลง',
                handler : data=>{
                  this.navCtrl.setRoot(InfouserPage,{status:this.status,id:this.userId});
                  console.log("id : "+this.userId);
                }
              }
            ],
            enableBackdropDismiss: false
          });
          alert.present();
        }else{
          console.log("no");
        }
      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }



}