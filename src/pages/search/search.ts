import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';
import { ListpatPage } from '../listpat/listpat';


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
   items:any;
    public resposeData:any;
    public data:any;
    public sid:any;
    userData = {
      "id_patient": "",
      "id_doctor": ""
    };
    userDatap = {
      "id_doctor": ""
    };
    userDatails={"user_id":""};
    x:any
  constructor(private storage: Storage,public navCtrl: NavController, public navParams: NavParams,public authService:AuthServiceProvider,public toastCtrl:ToastController) {
    this.storage.get('userData').then((val) => {
      var val = JSON.parse(val);
      this.userDatails.user_id=val;
      this.sid = this.userDatails.user_id;
      
      this.getpatient();
     this.initializeItems();
      console.log(this.sid);
      
      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  ionViewDidEnter(){
    console.log('ionViewDidEnter SearchPage');
    this.getpatient();
  }
  getpatient(){
    this.userDatap.id_doctor=this.sid;
    this.authService.PostData(this.userDatap, "getpatient").then((result)=>{
      this.resposeData = result;
      console.log(this.resposeData);
       if(this.resposeData.pattient){
         this.data=this.resposeData.pattient;
         this.items=this.data;
       }
       else{
         this.presentToast ("ไม่สามารถทำรายการได้");
       }
      },(err) => {
        //Connection failed message
        this.presentToast("ไม่สามารถเชื่อมต่ออินเทอร์เน็ต");
    });
  }
  presentToast(msg){
    let toast = this
      .toastCtrl
      .create({message: msg, duration: 2000});
    toast.present();
  }
  initializeItems() {
    this.items=this.data;
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.items = this.items.filter((item) => {
        return (item.name_patient.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  Addpatient(id_patient:string){
    this.userData.id_patient = id_patient;
    this.userData.id_doctor = this.sid;
    console.log(this.userData);
    this.authService.PostData(this.userData, "addpatient").then((result) => {
      this.resposeData = result;
      console.log(this.resposeData);
      if(this.resposeData.pattient){
        this.presentToast("เพิ่มรายการคนไข้เรียบร้อยแล้ว")
        this.data = this.resposeData.pattient;
      }
      else {
        this.presentToast("ไม่สามารถทำรายการได้");
      }
    }, (err) => {
      //connection filed
      this.presentToast("ไม่สามารถเชื่อมต่ออินเทอร์เน็ต");
    });
    this.navCtrl.pop();
    }
}

