import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { P5Page } from '../p5/p5';
import { P6Page } from '../p6/p6';
import { SearchPage } from '../search/search';
import { GamedocPage } from '../gamedoc/gamedoc';
import { ListpatPage } from '../listpat/listpat';
import { StorydocPage } from '../storydoc/storydoc';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';
import { HomePage } from '../home/home';
/**
 * Generated class for the MenudoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menudoctor',
  templateUrl: 'menudoctor.html',
})
export class MenudoctorPage {
  public getParam: any;
  public getData: any;
  public resposeData: any;
  public data: any;
  doctor = {
    "id_doctor": ""
  };

  doctorId: any = null;
  type_Online: string = "2";
  constructor(public authService: AuthServiceProvider, public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {

    this.storage.get('userData').then((val) => {
      var val = JSON.parse(val);
      //this.userDatap.id_patient = val;
      // this.userDatap.id_patient = this.userDatap.id_patient
      //  this.getData = navParams.get('datauser');
      // console.log("get data" + this.getData);
      //console.log("id patient >>>" + this.userDatap.id_patient);
      this.doctorId = val;
      //console.log("userdata" + this.userData);
      this.doctor.id_doctor = this.doctorId;
      console.log("user Id is " + this.doctor.id_doctor);
      //this.getDoctorData();
      // this.getAccount();
      this.getDoctorData();
    });


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenudoctorPage');

  }
  goHome() {
    this.navCtrl.setRoot(HomePage);
  }
  p5() {
    this.navCtrl.push(P5Page);
  }
  p6() {
    this.navCtrl.push(P6Page, { id: this.doctorId, name: this.data[0].name_doctor, type_Online: this.type_Online });
  }
  gamedoc() {
    this.navCtrl.push(GamedocPage);
  }
  search() {
    this.navCtrl.push(SearchPage);
  }
  list() {
    this.navCtrl.push(ListpatPage);
  }
  story() {
    this.navCtrl.push(StorydocPage,{doctorId:this.doctor.id_doctor});
    console.log("doctor Id is : "+this.doctor.id_doctor);
  }


  getDoctorData() {
    this.doctor.id_doctor = this.doctorId;
    console.log("doctor.id_doctor " + this.doctor.id_doctor);
    this.authService.PostData(this.doctor, "getAccountDoctor").then((result) => {
      this.resposeData = result;
      if (this.resposeData.doctor) {
        this.data = this.resposeData.doctor;
        // this.infouser = this.data

      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }



}