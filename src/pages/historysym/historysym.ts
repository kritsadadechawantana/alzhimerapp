import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';
import { MenudoctorPage } from '../menudoctor/menudoctor';

/**
 * Generated class for the HistorysymPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historysym',
  templateUrl: 'historysym.html',
})
export class HistorysymPage {
userId:string;
public resposeData: any;
choose:any;
data;
show=0;
public date_start=""
public date_stop=""
public sick1:any=0;
public sick2:any=0;
public sick3:any=0;
public sick4:any=0;
public sick5:any=0;
public sick6:any=0;
public sick7:any=0;

user={
  "id_patient":null
}

  

  constructor(public authService: AuthServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.userId=navParams.get('userId');
    this.user.id_patient=navParams.get('userId');
    console.log( "id_patient : "+this.user.id_patient);
    
   this.getSymptomsHistory();
   
  }

  ionViewDidLoad() {
 

  }
  ionViewDidEnter(){
  this.show=parseInt(this.choose);
  this.getSymptomsHistory()
  console.log(this.choose);
    
  }
  getSymptomsHistory() {
     
    this.authService.PostData(this.user, "getHistorySymptoms").then((result) => {
      this.resposeData = result;
      console.log(this.resposeData);
      if (this.resposeData.pattient) {
        this.data = this.resposeData.pattient;
        if(this.data.length!=0){
          this.choose=this.data[this.data.length-1].id;
        }
        
       console.log(this.data);
      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }


  showData(i){
   
      this.date_start=this.data[i].date_start;
      this.date_stop=this.data[i].date_stop;
      this.sick1=this.data[i].sick1;
      this.sick2=this.data[i].sick2;
      this.sick3=this.data[i].sick3;
      this.sick4=this.data[i].sick4;
      this.sick5=this.data[i].sick5;
      this.sick6=this.data[i].sick6;
      this.sick7=this.data[i].sick7;
    
  }
  home(){
    this.navCtrl.setRoot(MenudoctorPage);
  }
}
