import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';
import { ShowDataPatientPage } from '../show-data-patient/show-data-patient';
import { ShowActivityPatientPage } from '../show-activity-patient/show-activity-patient';
import { ShowSymtomsPage } from '../show-symtoms/show-symtoms';

/**
 * Generated class for the ListpatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listpat',
  templateUrl: 'listpat.html',
})
export class ListpatPage {
  public resposeData:any;
  public data:any
  public sid:any
  userData = {
    "id_patient":"",
    "id_doctor":""
  };
  userDatap = {
    "id_doctor":""
  };
  userDetails={"user_id":""}
  type_Online:string="2";
  constructor(public toastctrl:ToastController,public authService:AuthServiceProvider,public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
    this.storage.get('userData').then((val)=>{
      var val = JSON.parse(val);
      this.userDetails.user_id=val;
      this.sid = this.userDetails.user_id
      console.log(this.sid);
      this.getMyPatient();
    });
    
  }
 
  getMyPatient(){
    this.userDatap.id_doctor=this.sid;
    this.authService.PostData(this.userDatap, "getmypatient").then((result)=>{
      this.resposeData = result;
      console.log(this.resposeData);
      if (this.resposeData.pattient) {
        this.data = this.resposeData.pattient;
      }else{
        this.presenToast("ไม่สามารถทำรายการได้");
      }
    },(err) =>{
      this.presenToast("ไม่สามารถเชื่อมต่อได้");
    
      
    });
  }
  presenToast(msg){
    let toast = this.toastctrl.create({message:msg, duration:2000});
    toast.present();
  }
  ionViewDidEnter(){
    console.log('ionViewDidEnter SearchPage');
    this.getMyPatient();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListpatPage');
    this.getMyPatient();
  }
  showdata(id:string){
    this.navCtrl.push(ShowDataPatientPage,{id:id})
  }
  showactivity(id:string){
    this.navCtrl.push(ShowSymtomsPage,{userId:id,type_online:this.type_Online})
  }

  search(){
    this.navCtrl.push(SearchPage);
}
}
