import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';
import { P5detailPage } from '../p5detail/p5detail';


/**
 * Generated class for the P5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p5',
  templateUrl: 'p5.html',
})
export class P5Page {

  ionViewDidLoad() {
    console.log('ionViewDidLoad P5Page');
  }
  items:any;
  public resposeData:any;
  public data:any;
  storyId:string
  userData = {
    "id_story": '',
    "id_doctor": "",
    "date":"", 
    "topic": "",
    "detail": "",
    "status_story":"",
    "url":""
  };
  userDatap = {
    "id_patien": ""
  };
  userDetails = { "user_id": "" };
  public sid:any;

  constructor(public app: App,public storage:Storage,public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  this.storage.get('userData').then((val) =>{
   var val = JSON.parse(val);
   this.userDetails.user_id = val;
   this.sid = this.userDetails.user_id;
    console.log('ionViewDidLoad p5Stuc');
      this.showStory();
   });
  }
  ionViewWillEnter(){
    console.log('ionViewWillEnter p5Page');
    this.showStory();
  }
  read(story_id){
    this.storyId=story_id;
    console.log(this.storyId);
   this.navCtrl.push(P5detailPage,{story_id:this.storyId})

  }
  showStory(){
    this.userDatap.id_patien=this.sid;
    this.authService.PostData(this.userDatap, "gettoppic").then((result)=>{
      this.resposeData = result;
      console.log(result)
      if (this.resposeData.pattient) {
       this.data = this.resposeData.pattient; 
        this.items =this.data;
      }
     else {
        console.log(this.resposeData, "not conn");
     }
    }, (err) => {
      console.error(err);
    });
  }

  
  test(url){
    console.log(url);
  }
}
