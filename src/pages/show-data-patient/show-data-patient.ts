import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';

/**
 * Generated class for the ShowDataPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-data-patient',
  templateUrl: 'show-data-patient.html',
})
export class ShowDataPatientPage {
  getid:any;
  userDatap = {
    "id_patient": ""
  };
  public resposeData: any;
  public data: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public authService: AuthServiceProvider, public toastCtrl: ToastController) {

    this.getid = navParams.get('id');
    console.log(this.getid);
    this.getAccount();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowDataPatientPage');
  }
  getAccount() {
    this.userDatap.id_patient = this.getid;
    console.log(this.userDatap);
    this.authService.PostData(this.userDatap, "getAccountPatient").then((result) => {
      this.resposeData = result;
      if (this.resposeData.patient) {
        this.data = this.resposeData.patient;
        console.log(this.data);
        

      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }

}
