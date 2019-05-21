import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { P3Page } from '../p3/p3';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';
import { EditdrugPage } from '../editdrug/editdrug';
import * as moment from 'moment';
import { LocalNotifications } from '@ionic-native/local-notifications';
/**
 * Generated class for the ShowdrugPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showdrug',
  templateUrl: 'showdrug.html',
})
export class ShowdrugPage {
  items:any;
  public resposeData:any;
  public data:any;
  dateSplit=[];
  date=[];
  times=[];
  timeSplit=[];
  dateSplit2=[];
  date2=[];
  bangkokTime:string;
  userData = {
    "id_drug": "",
    "drug_type": "",
    "drug_name": "",
    "drug_alarm": "",
    "drug_time": "",
    "drug_date": "",
    "drugend_date": "",
    "id_patient":""
  };
  userDatap = {
    "id_patient": "",
    "id_doctor": ""
};
drug={
  id:null
}
  userDetails = { "user_id": "" };
  public sid:any;
  getdata:any
  iduser:any
constructor(private localNotifications: LocalNotifications,public app: App,public storage:Storage,public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  this.date=[];
  this.times=[];
  this.timeSplit=[];
  this.dateSplit2=[];
  this.date2=[];
  this.storage.get('userdata').then((val) => {
    console.log (val)
    var val = JSON.parse(val);
    this.userDetails.user_id = val;
    this.sid = this.userDetails.user_id;
    this.showdrug();
    //bangkokTime
  });
  this.bangkokTime=moment(this.bangkokTime).format(

  );
  }
  ionViewDidEnter(){
    console.log('ionViewDidEnter ShowdrugPage');
    this.showdrug();
  }
 


  ionViewDidLoad() {
    this.storage.get('userdata').then((val) => {
      var val = JSON.parse(val);
      this.userDetails.user_id = val;
      this.sid = this.userDetails.user_id;
      this.showdrug();
      //bangkokTime
    });
  }
  gotop3(){
    this.navCtrl.push(P3Page,{id:this.userDatap.id_patient});
  }
  // read(idu:string,type:string,name:string,alarm:string,time:string,date:string,dateend:string,id:string){
  //   this.navCtrl.push(EditdrugPage,{iduser:idu,typed:type,named:name,alarmd:alarm,timed:time,dated:date,dateendd:dateend,idDrug:id})
  // }


  read(drugId:string){
    this.drug.id=drugId;
    this.navCtrl.push(EditdrugPage,{drugId:this.drug.id});
  }
  showdrug(){
    this.userDatap.id_patient=this.sid;
    this.authService.PostData(this.userDatap, "getdrug").then((result)=>{
      this.resposeData = result;
      console.log(this.resposeData);
      if (this.resposeData.pattient) {
       this.data = this.resposeData.pattient; 
        this.items =this.data;
        // for (let index = 0; index <this.items.length; index++){
        // this.timeSplit=this.items[index].drug_time.split(":");
        // this.times.push(this.timeSplit[0]+":"+this.timeSplit[1])
        // console.log(this.times)
        // this.dateSplit=this.items[index].drug_date.split("-");
        // this.date.push(this.dateSplit[2]+"-"+this.dateSplit[1]+"-"+this.dateSplit[0])
        // console.log(this.dateSplit)
        // this.dateSplit2=this.items[index].drugend_date.split("-");
        // this.date2.push(this.dateSplit2[2]+"-"+this.dateSplit2[1]+"-"+this.dateSplit2[0])
        // console.log(this.dateSplit2[0])        
        // }
      }
     else {
        console.log(this.resposeData, "not conn");
     }
    }, (err) => {
      console.error(err);
    });
  }
  

  noti(){
    this.localNotifications.schedule({
      title:'Hello noti',
      at:{
        at:new Date(this.bangkokTime)
      }
    });
  }
 
  test(drugId:string){
    console.log(drugId);
  }
}
