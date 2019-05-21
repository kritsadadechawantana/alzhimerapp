import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EditstoryPage } from '../editstory/editstory';
import { AuthServiceProvider } from '../../providers/auth-service';
import { StorydocPage } from '../storydoc/storydoc';

/**
 * Generated class for the StorybydocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storybydoc',
  templateUrl: 'storybydoc.html',
})
export class StorybydocPage {
  getTopic: any
  getDetail: any
  getIdstory: any
  getUrl: any
  resposeData: any
  userDatap = {
    "id_doctor": ""
  };
  data: any;
  storyId: string;
  doctor = {
    doctor_id: null
  }
  story = {
    id: null
  }
  newStory = {
    "id":null,
    "topic":null,
    "url":null,
    "detail":null
  };
  constructor(public alertCtrl: AlertController, public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

    this.doctor.doctor_id = navParams.get('doctorId');
    console.log("doctor Id is : " + this.doctor.doctor_id);
    this.storyId = navParams.get('storyId');
    console.log("story id is : " + this.storyId);
    this.story.id = navParams.get('storyId');
    // this.getTopic = navParams.get('topic')
    // this.getDetail = navParams.get('detail')
    // this.getIdstory = navParams.get('idStory')
    // this.getUrl = navParams.get('url')
    // console.log("topic" + this.getTopic);
    // console.log(this.getDetail);
    // console.log("story Id" + this.getIdstory);
    this.getKnowlage();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorybydocPage');
  }
  // edit() {
  //   this.navCtrl.push(EditstoryPage, { topic2: this.getTopic, detail2: this.getDetail, id2: this.getIdstory, url: this.getUrl })
  // }
  del() {
    this.story.id=this.navParams.get('storyId');
    const alert=this.alertCtrl.create({
      title:'ต้องการลบบทความหรือไม่',
      buttons:[
        {
          text:'ยกเลิก',
          handler:data=>{
            this.navCtrl.pop();
          }
        },{
          text:'ตกลง',
          handler:data=>{
            this.authService.PostData(this.story.id, "deleteStory").then((result) => {
              
              this.navCtrl.pop();
            }, (err) => {
              console.error(err);
            });
          }
        }
      ]
    });
    alert.present();
 
  }
  getKnowlage() {
  console.log(this.story.id);
    this.authService.PostData(this.story, "getKnowlageById").then((result) => {
      this.resposeData = result;
      if (this.resposeData.patient) {
        this.data = this.resposeData.patient;
        console.log(this.data);
        this.newStory.topic=this.data[0].topic;
        this.newStory.detail=this.data[0].detail;
        this.newStory.url=this.data[0].url;

      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }
  edit(){
    this.newStory.id=this.story.id;
    console.log(this.newStory);
    const alert2=this.alertCtrl.create({
      title:'บันทึกการแก้ไขหรือไม่',
      buttons:[
        {
          text:'ยกเลิก',
          handler:data=>{
            this.navCtrl.pop();
          }
        },{
          text:'ตกลง',
          handler:data=>{
            this.authService.PostData(this.newStory, "editstorydoctor").then((result)=>{
              this.resposeData = result;  
              console.log(result)
              if (this.resposeData.pattient) {
                console.log(this.resposeData, "sss");
                
              }
             else {
                console.log(this.resposeData, "not conn");
             }
             this.navCtrl.pop();
            }, (err) => {
              console.error(err);
            });
            
            
            }
        }
      ]
    });
    alert2.present();
       

  }

}
