import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';
import { HistorysymPage } from '../historysym/historysym';

/**
 * Generated class for the ShowAllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-all',
  templateUrl: 'show-all.html',
})
export class ShowAllPage {
  userId: string;
  data: any;
  dataDateReset: any;
  dateSplit = [];
  timeSplit = [];

  public resposeData: any;
  checkForPush: string;
  sick1: number = 0;
  sick2: number = 0;
  sick3: number = 0;
  sick4: number = 0;
  sick5: number = 0;
  sick6: number = 0;
  sick7: number = 0;
  loop;
  type_Online: string;
  user = {
    "id_patient": null
  }
  reset = {
    "id_patient": null,
    "hour_reset": null,
    "minute_reset": null,
    "day_reset": null,
    "month_reset": null,
    "year_reset": null,
  }
  dateLasted = {
    "hour": null,
    "minute": null,
    "day": null,
    "month": null,
    "year": null,
  }
  dateData = {
    "hour": null,
    "minute": null,
    "day": null,
    "month": null,
    "year": null,
  }
  history = {
    "id_patient": null,
    "date_start": null,
    "date_stop": null,
    "sick1": null,
    "sick2": null,
    "sick3": null,
    "sick4": null,
    "sick5": null,
    "sick6": null,
    "sick7": null,
  }
  dateNow = {
    year: null,
    month: null,
    day: null
  }

  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController, public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    // var date = new Date();
    // this.dateNow.day = date.getDate();
    // this.dateNow.month = date.getMonth();
    // this.dateNow.year = date.getFullYear();

    // this.userId = this.navParams.get('userId');
    // this.type_Online = navParams.get('type_Online');
    // this.user.id_patient = this.navParams.get('userId');
    // console.log("User Id " + this.user.id_patient);
    // console.log('ionViewDidLoad ShowAllPage');
    // this.getDateReset();
    // this.getSymptoms();
    // if (this.getDateReset.length != 0) {

    //   //this.checkForPush="true";
    // } else {
    //  // this.checkForPush="false";
    //   const alert2 = this.alertCtrl.create({
    //     title: 'ยังไม่มีการบันทึกอาการ',
    //     buttons: ['ตกลง']
    //   });
    //   alert2.present();
    // }
    this.dateSplit = [];
    this.timeSplit = [];
    this.sick1 = 0;
    this.sick2 = 0;
    this.sick3 = 0;
    this.sick4 = 0;
    this.sick5 = 0;
    this.sick6 = 0;
    this.sick7 = 0;

  }

  getSymptoms() {
    // this.getDateReset()
    this.authService.PostData(this.user, "getSymptoms").then((result) => {
      this.resposeData = result;
      console.log(this.resposeData);
      if (this.resposeData.pattient) {
        this.data = this.resposeData.pattient;
        this.sumAll();
      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
    console.log(this.data);
  }

  ionViewDidEnter() {
    //this.getDateReset()
    var date = new Date();
    this.dateNow.day = date.getDate();
    this.dateNow.month = date.getMonth();
    this.dateNow.year = date.getFullYear();

    this.userId = this.navParams.get('userId');
    this.type_Online = this.navParams.get('type_Online');
    this.user.id_patient = this.navParams.get('userId');
    console.log("User Id " + this.user.id_patient);
    console.log('ionViewDidLoad ShowAllPage');
    this.getDateReset();
    this.getSymptoms();
  }

  ionViewDidLoad() {
    this.dateSplit = [];
    this.timeSplit = [];
    this.sick1 = 0;
    this.sick2 = 0;
    this.sick3 = 0;
    this.sick4 = 0;
    this.sick5 = 0;
    this.sick6 = 0;
    this.sick7 = 0;
  }

  sumAll() {
    for (let index = 0; index < this.data.length; index++) {
      this.dateSplit = this.data[index].date_symptoms.split("-");//วันที่จากอาการ ถูกเก็บเป็นอาเรย์
      this.timeSplit = this.data[index].time_symptoms.split(":");//เวลาจากอาการ ถูกเก็บเป็นอาเรย์
      //this.dateData.hour = this.dateSplit[0];


      if (parseInt(this.dateLasted.year) < parseInt(this.dateSplit[0])) {
        this.sum(this.data[index].id_symptoms);
      } else if (parseInt(this.dateLasted.year) == parseInt(this.dateSplit[0])) {
        if (parseInt(this.dateLasted.month) < parseInt(this.dateSplit[1])) {
          this.sum(this.data[index].id_symptoms);
        } else if (parseInt(this.dateLasted.month) == parseInt(this.dateSplit[1])) {
          if (parseInt(this.dateLasted.day) < parseInt(this.dateSplit[2])) {
            this.sum(this.data[index].id_symptoms);
          } else if (parseInt(this.dateLasted.day) == parseInt(this.dateSplit[2])) {
            if (parseInt(this.dateLasted.hour) < parseInt(this.timeSplit[0])) {
              this.sum(this.data[index].id_symptoms);
            } else if (parseInt(this.dateLasted.hour) == parseInt(this.timeSplit[0])) {
              if (parseInt(this.dateLasted.minute) <= parseInt(this.timeSplit[1])) {
                this.sum(this.data[index].id_symptoms);
              } else { }
            } else { }
          } else { }
        } else { }
      } else { }


    }
  }


  sum(data) {
    if (data == "1") {
      this.sick1++;
    } else if (data == "2") {
      this.sick2++;
    } else if (data == "3") {
      this.sick3++;
    } else if (data == "4") {
      this.sick4++;
    } else if (data == "5") {
      this.sick5++;
    } else if (data == "6") {
      this.sick6++;
    } else if (data == "7") {
      this.sick7++;
    }
    this.dateSplit = [];
    this.timeSplit = [];
  }

  getTimeNow() {
    var date = new Date();
    this.reset.hour_reset = date.getHours();
    this.reset.minute_reset = date.getMinutes();
    this.reset.day_reset = date.getDate();
    this.reset.month_reset = date.getMonth();
    this.reset.year_reset = date.getFullYear();
    console.log("hour" + this.reset.hour_reset);
  }

  addDateReset() {
    var date = new Date();
    const alert = this.alertCtrl.create({
      title: 'เริ่มบันทึกอาการใหม่หรือไม่?',
      buttons: [
        {
          text: 'ยกเลิก'
        }, {
          text: 'ตกลง',
          handler: data => {
            this.getTimeNow();

            this.history.id_patient = this.user.id_patient;
            this.history.date_start = this.dateLasted.day + "-" + this.dateLasted.month + "-" + this.dateLasted.year;
            this.history.date_stop = date.getDate() + "-" + date.getMonth() + "-"+date.getFullYear();
            this.history.sick1 = this.sick1;
            this.history.sick2 = this.sick2;
            this.history.sick3 = this.sick3;
            this.history.sick4 = this.sick4;
            this.history.sick5 = this.sick5;
            this.history.sick6 = this.sick6;
            this.history.sick7 = this.sick7;

            this.authService.PostData(this.history, "addHistorySymptoms").then((result) => {
              this.resposeData = result;
              console.log(this.resposeData)
              this.dateSplit = [];
              this.timeSplit = [];
              this.sick1 = 0;
              this.sick2 = 0;
              this.sick3 = 0;
              this.sick4 = 0;
              this.sick5 = 0;
              this.sick6 = 0;
              this.sick7 = 0;
              
              // this.getSymptoms();
            });
            this.reset.id_patient = this.userId;
            this.authService.PostData(this.reset, "addDateReset").then((result) => {
              this.resposeData = result;
              console.log(this.resposeData)
             // this.getSymptoms();
            });




          }
        }
      ],
      enableBackdropDismiss: false,
    });
    alert.present();


  }

  getDateReset() {
  
    this.authService.PostData(this.user, "getDateReset").then((result) => {
      this.resposeData = result;
      console.log(this.resposeData);
      if (this.resposeData.pattient) {
        this.dataDateReset = this.resposeData.pattient;
        console.log("data for reset > " + this.dataDateReset);
        if (this.dataDateReset.length != 0) {
          this.dateLasted.hour = this.dataDateReset[this.dataDateReset.length - 1].hour_reset;
          this.dateLasted.minute = this.dataDateReset[this.dataDateReset.length - 1].minute_reset;
          this.dateLasted.day = this.dataDateReset[this.dataDateReset.length - 1].day_reset;
          this.dateLasted.month = this.dataDateReset[this.dataDateReset.length - 1].month_reset;
          this.dateLasted.year = this.dataDateReset[this.dataDateReset.length - 1].year_reset;
        }

      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }
  gotoHistoryPage() {
    this.navCtrl.push(HistorysymPage, { userId: this.userId });
    this.dateSplit = [];
    this.timeSplit = [];
    this.sick1 = 0;
    this.sick2 = 0;
    this.sick3 = 0;
    this.sick4 = 0;
    this.sick5 = 0;
    this.sick6 = 0;
    this.sick7 = 0;
  }

}
