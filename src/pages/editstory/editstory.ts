import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController,App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';
import { StorybydocPage } from '../storybydoc/storybydoc';
import { StorydocPage } from '../storydoc/storydoc';

/**
 * Generated class for the EditstoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editstory',
  templateUrl: 'editstory.html',
})
export class EditstoryPage {

  getTopic:any
  getDetail:any
  getId:any
  userData = {
    "idStory":"",
    "dataTopic":"",
    "dataDetail":""
  };
  public resposeData:any;

  constructor(public authService:AuthServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.getTopic = navParams.get('topic2')
    this.getDetail = navParams.get('detail2')
    this.getId = navParams.get('idStory')
    // console.log(this.getTopic);
    // console.log(this.getDetail);
    console.log(this.getId);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditstoryPage');
  }
  edit(){
    this.userData.idStory = this.getId
    this.userData.dataTopic = this.getTopic
    this.userData.dataDetail = this.getDetail
    console.log(this.userData);
    // this.authService.PostData(this.userData, "editstorydoctor").then((result)=>{
    //   this.resposeData = result;  
    //   console.log(result)
    //   if (this.resposeData.pattient) {
    //     console.log(this.resposeData, "sss");
    //     this.navCtrl.pop();
    //   }
    //  else {
    //     console.log(this.resposeData, "not conn");
    //  }
    // }, (err) => {
    //   console.error(err);
    // });
  
   
  }

}
