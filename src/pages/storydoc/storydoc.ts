import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CreatstoryPage } from '../creatstory/creatstory';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';
import { StorybydocPage } from '../storybydoc/storybydoc';

/**
 * Generated class for the StorydocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storydoc',
  templateUrl: 'storydoc.html',
})
export class StorydocPage {

  items:any;
  public resposeData:any;
  public data:any;
  date=[];
  datesplit=[];
  userData = {
    "id_story": '',
    "id_doctor": "",
    "date":"", 
    "topic": "",
    "detail": "",
    "status_story":"",
    "url":""
  };
  doctor = {
    "id_doctor": null
  };
  userDetails = { "user_id": "" };
  storyId:string;
  public sid:any;

  constructor(public app: App,public storage:Storage,public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  this.doctor.id_doctor=navParams.get('doctorId');
    // this.storage.get('userData').then((val) =>{
  //  var val = JSON.parse(val);
  //  this.userDetails.user_id = val;
  //  this.sid = this.userDetails.user_id;
  //   console.log('ionViewDidLoa  d StorydocPageconStuc');
  //    this.showStory();
  //  });
  
  }
  ionViewDidEnter(){
    console.log('ionViewWillEnter StorydocPage');
    this.getStory();
  }
  read(storyId:string){
    // this.navCtrl.push(StorybydocPage,{topic:a1,detail:a2,idStory:id,url:url})
    this.storyId=storyId;
    console.log("story id is : "+this.storyId);
    console.log("doctor id is : "+this.doctor.id_doctor);
    this.navCtrl.push(StorybydocPage,{storyId:this.storyId,doctorId:this.doctor.id_doctor})
    console.log(this.doctor.id_doctor);
  }

  creat(){
    this.navCtrl.push(CreatstoryPage,{doctorId:this.doctor.id_doctor});
  }


  getStory(){
    
    this.authService.PostData(this.doctor, "gettoppic").then((result)=>{
      this.resposeData = result;
      console.log(result)
      if (this.resposeData.pattient) {
       this.data = this.resposeData.pattient; 
      
      }
     else {
        console.log(this.resposeData, "not conn");
     }
    }, (err) => {
      console.error(err);
    });
  }
}