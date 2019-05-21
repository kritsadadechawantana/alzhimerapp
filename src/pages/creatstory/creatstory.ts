import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { P6Page } from '../p6/p6';
import { P5Page } from '../p5/p5';
import { StorydocPage } from '../storydoc/storydoc';
import { AuthServiceProvider } from '../../providers/auth-service';

/**
 * Generated class for the CreatstoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creatstory',
  templateUrl: 'creatstory.html',
})
export class CreatstoryPage {
  userData = {
    "id_patient":null,
    "id_doctor":null,
    "id":0,
    "topic":null,
    "detail":null,
    "date" :null,
    "url":null,
    "date_story":null,
    "time_story":null,
    "status_story":0
  };
  userDatap = {
    "id_patient": ""
  
  };


  public resposeData:any;

  constructor(public authService: AuthServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.userData.id_doctor=navParams.get('doctorId');

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatstoryPage');
   
  }

  save(){
    console.log(this.userData);
    var date=new Date();
    this.userData.date_story=date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();
    this.userData.time_story=date.getHours()+":"+date.getMinutes();
    this.authService.PostData(this.userData,"AddToppic").then((result)=> {
      
      this.resposeData = result;
      console.log(this.resposeData)
     });
    this.navCtrl.pop();
  }

 
}
