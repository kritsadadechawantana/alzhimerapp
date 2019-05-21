import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';

/**
 * Generated class for the ShowActivityPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-activity-patient',
  templateUrl: 'show-activity-patient.html',
})
export class ShowActivityPatientPage {
  user={
    "id_patient":null
  }
  public resposeData:any;
  public data:any;

  constructor( public navCtrl: NavController, public navParams: NavParams, 
    public authService: AuthServiceProvider, public toastCtrl: ToastController) {
    this.user.id_patient = navParams.get('id');
    // console.log(this.getid);
    this.getActivity();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowActivityPatientPage');
  }
  getActivity() {
    this.authService.PostData(this.user, "showActivity").then((result) => {
      this.resposeData = result;
      if (this.resposeData.pattient) {
        this.data = this.resposeData.pattient;
        console.log(this.data);
        
        console.log(this.resposeData);
        
      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }

}
