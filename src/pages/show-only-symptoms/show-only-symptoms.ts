import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';

/**
 * Generated class for the ShowOnlySymptomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-only-symptoms',
  templateUrl: 'show-only-symptoms.html',
})
export class ShowOnlySymptomsPage {
  idSymptoms:string;
  userId:string;
  symptomsName:string;
  public resposeData: any;
  public data: any;
  user = {
    "id_patient": null
  }
  date=[];
  dateSplit=[];

  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController, public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.idSymptoms=navParams.get('idSymptoms');
    this.userId=navParams.get('userId');
    this.symptomsName=navParams.get('symptomsName');
    this.user.id_patient=this.userId;
    console.log(this.idSymptoms);
    console.log(this.userId);
    console.log(this.symptomsName);
    this.getSymptoms();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowOnlySymptomsPage');
  }
  getSymptoms() {
    this.authService.PostData(this.user, "getSymptoms").then((result) => {
      this.resposeData = result;
      console.log(this.resposeData);
      if (this.resposeData.pattient) {
        this.data = this.resposeData.pattient;
        for (let index = 0; index < this.data.length; index++) {
          this.dateSplit=this.data[index].date_symptoms.split("-");
          this.date.push(this.dateSplit[2]+"-"+this.dateSplit[1]+"-"+this.dateSplit[0]);
         
          
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
