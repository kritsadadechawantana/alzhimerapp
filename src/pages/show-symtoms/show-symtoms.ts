import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, ActionSheetController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';
import { ResultsymPage } from '../resultsym/resultsym';
import { ShowAllPage } from '../show-all/show-all';
import { ShowOnlySymptomsPage } from '../show-only-symptoms/show-only-symptoms';

/**
 * Generated class for the ShowSymtomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-symtoms',
  templateUrl: 'show-symtoms.html',
})
export class ShowSymtomsPage {

  dateFromCalendar = [];
  public data: any;
  public datas: any;
  userId: string;
  dataDateReset :any
  showOnly: string = null;
  symptomsName: string = null;
  symptomsId: string = null;
  dayString: string = null;
  public resposeData: any;
  testCheckboxOpen: boolean;
  type_Online: string;
  testCheckboxResult;

  day;
  date;
  mont;
  year;
  time;
  hour;
  minute;
  public alertForAdd: boolean;
  alertToAdd: string;
  show: boolean;
  user = {
    "id_patient": null
  }
  calendar = {
    year: null,
    month: null,
    day: null
  }
  dateNow = {
    year: null,
    month: null,
    day: null
  }

  symptoms = {
    "id_symptoms": null,
    "id_patient": null,
    "time_symptoms": null,
    "day_symptoms": null,
    "date_symptoms": null

  }
  reset = {
    "id_patient": null,
    "hour_reset": null,
    "minute_reset": null,
    "day_reset": null,
    "month_reset": null,
    "year_reset": null,
  }


  constructor(public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public alertCtrl: AlertController, public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.userId = navParams.get('userId');
    this.type_Online = navParams.get('type_Online');
    console.log("userId " + this.userId);
    this.user.id_patient = this.userId;
    var date = new Date();
    //this.dayString=date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();

    console.log("date" + this.date);
    console.log("day" + this.day);
    console.log("mont" + this.mont);
    console.log("year" + this.year);
    console.log("time" + this.time);
    console.log("time : " + this.hour + " : " + this.minute);
    this.getSymptoms();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowSymtomsPage');
  }

  getSymptoms() {
    this.authService.PostData(this.user, "getSymptoms").then((result) => {
      this.resposeData = result;
      console.log(this.resposeData);
      if (this.resposeData.pattient) {
        this.data = this.resposeData.pattient;
        this.datas = this.resposeData.pattient;
      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }


  alertForAddSymptoms() {
    if (this.dayString == null) {
      const alert3 =this.alertCtrl.create({
        title:'กรุณาเลือกวันในปฎิทิน',
        buttons:['ตกลง']
      });
      alert3.present();
    } else {
      this.alertToAdd = this.alertForAdd.toString();
      if (this.alertToAdd == "true") {
        let alert = this.alertCtrl.create();
        alert.setTitle('บันทึกอาการ');
        alert.addInput({
          type: 'checkbox',
          label: 'อาการปวดหัว',
          value: 'value1'
        });
        alert.addInput({
          type: 'checkbox',
          label: 'อาเจียน',
          value: 'value2'
        });
        alert.addInput({
          type: 'checkbox',
          label: 'ก้าวร้าว ดุดัน',
          value: 'value3'

        });
        alert.addInput({
          type: 'checkbox',
          label: 'ลืมชื่อหรือลืมว่ากำลังทำอะไร',
          value: 'value4'
        });
        alert.addInput({
          type: 'checkbox',
          label: 'นอนไม่หลับ',
          value: 'value5'
        });
        alert.addInput({
          type: 'checkbox',
          label: 'ปัสสาวะราด',
          value: 'value6'
        });
        alert.addInput({
          type: 'checkbox',
          label: 'ทำร้ายตนเองหรือผู้อื่น',
          value: 'value7'
        });
        alert.addButton(
          'ยกเลิก'
        );
        alert.addButton({
          text: 'เพิ่ม',

          handler: data => {
            this.testCheckboxOpen = false;
           
            this.testCheckboxResult = data;
            console.log("testCheckboxResult" + this.testCheckboxResult);
            if (this.testCheckboxResult.length > 0) {
              for (let index = 0; index < 7; index++) {
                this.testCheckboxResult[index]
                if (this.testCheckboxResult[index] == 'value1') {
                  this.symptoms.id_symptoms = "1";
                  this.addSymptoms();

                } if (this.testCheckboxResult[index] == 'value2') {
                  this.symptoms.id_symptoms = "2";
                  this.addSymptoms();

                } if (this.testCheckboxResult[index] == 'value3') {

                  this.symptoms.id_symptoms = "3";
                  this.addSymptoms();
                } if (this.testCheckboxResult[index] == 'value4') {

                  this.symptoms.id_symptoms = "4";
                  this.addSymptoms();
                } if (this.testCheckboxResult[index] == 'value5') {
                  this.symptoms.id_symptoms = "5";
                  this.addSymptoms();

                } if (this.testCheckboxResult[index] == 'value6') {
                  this.symptoms.id_symptoms = "6";
                  this.addSymptoms();

                } if (this.testCheckboxResult[index] == 'value7') {
                  this.symptoms.id_symptoms = "7";
                  this.addSymptoms();
                }
              }
            }
          },

        });

        alert.present();
      } else {
        const alert2 = this.alertCtrl.create({
          title: 'ไม่สามารถบันทึกล่วงหน้าได้',
          buttons: [
            {
              text: 'ตกลง'
            }
          ]
        });
        alert2.present();
      }

    }
   }

  addSymptoms() {
    var date = new Date();
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.time = this.hour + ":" + this.minute;
    this.symptoms.day_symptoms = this.day;
    this.symptoms.id_patient = this.user.id_patient;
    this.symptoms.date_symptoms = this.dayString;
    this.symptoms.time_symptoms = this.time;
    this.authService.PostData(this.symptoms, "addSymptoms").then((result) => {
      this.resposeData = result;
      console.log(this.resposeData)
      this.getSymptoms();
      this.getDateReset()
    });
  }

  presenToast(msg) {
    let toast = this.toastCtrl.create({ message: msg, duration: 1000 });
    toast.present();
  }

  onDaySelect(data) {
    this.dayString="";
    var date = new Date();
    this.dateNow.year = date.getFullYear();
    this.dateNow.month = date.getMonth();
    this.dateNow.day = date.getDate();
    this.reset.year_reset=data.year;
    this.reset.month_reset=data.month;
    this.reset.day_reset=data.date;
    if ((parseInt(this.dateNow.year)) - (parseInt(data.year)) > 0) {
        this.alertForAdd = true;
      } else if ((parseInt(this.dateNow.year)) - (parseInt(data.year)) == 0) {
        if ((parseInt(this.dateNow.month)) - (parseInt(data.month)) > 0) {
          this.alertForAdd = true;
        } else if ((parseInt(this.dateNow.month)) - (parseInt(data.month)) == 0) {
          if ((parseInt(this.dateNow.day)) - (parseInt(data.date)) > 0) {
            this.alertForAdd = true;
          } else if ((parseInt(this.dateNow.day)) - (parseInt(data.date)) == 0) {
            this.alertForAdd = true;
          } else {
            this.alertForAdd = false;
          }
        } else {
          this.alertForAdd = false;
        }
      } else {
        this.alertForAdd = false;
      }
      console.log(this.alertForAdd);                                                                                                                                                                                                                                    console.log(this.alertForAdd);
    this.dayString = data.year + "-" + data.month + "-" + data.date
    this.getSymptoms();
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index].date_symptoms == this.dayString) {
        //console.log(this.data[index].date_symptoms);
        this.show = true;
      } else {
        this.show = false;
      }
      return this.alertForAdd;
    }
  }

  showAll() {
    this.navCtrl.push(ShowAllPage, { userId: this.user.id_patient, type_Online: this.type_Online });
  }

  test() {

    this.getDateReset();
  }

  showAlert() {
    if (this.show == false) {
      this.alertForAddSymptoms();
      this.show = true;
    } else {
    }
  }

  showOnlyChoose(id, id_symptoms, name_symptoms) {
    this.showOnly = id_symptoms;
    this.symptomsName = name_symptoms;
    this.symptomsId = id;

    let actionSheet = this.actionSheetCtrl.create({
      title: 'เลือก',
      buttons: [
        {
          text: 'ดูเฉพาะรายการที่เลือก',

          handler: () => {
            this.navCtrl.push(ShowOnlySymptomsPage, { idSymptoms: this.showOnly, userId: this.userId, symptomsName: this.symptomsName });
          }
        },
        {
          text: 'ลบอาการ',
          role: 'destructive',
          handler: () => {
            const alert2 = this.alertCtrl.create({
              title: 'ต้องการลบหรือไม่',
              buttons: [
                {
                  text: 'ยกเลิก'
                }, {
                  text: 'ตกลง',
                  handler: data => {
                    this.authService.PostData(this.symptomsId, "deleteSymptoms").then((result) => {
                      this.getSymptoms();
                    }, (err) => {
                      console.error(err);
                    });
                  }
                }
              ]

            });
            alert2.present();
          }
        },
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });

    actionSheet.present();
  }


  getDateReset() {
   
    this.authService.PostData(this.user, "getDateReset").then((result) => {
      this.resposeData = result;
      console.log(this.resposeData);
      if (this.resposeData.pattient) {
        this.dataDateReset = this.resposeData.pattient;
        console.log(this.dataDateReset);
        if(this.dataDateReset.length==0){
          console.log("date reset is null");
          var date=new Date();
          this.reset.id_patient = this.user.id_patient;
          // this.reset.year_reset=date.getFullYear();
          // this.reset.month_reset=date.getMonth();
          // this.reset.day_reset=date.getDate();
          this.reset.hour_reset=date.getHours();
          this.reset.minute_reset=date.getMinutes();
          console.log(this.reset);
          this.authService.PostData(this.reset, "addDateReset").then((result) => {
            this.resposeData = result;
            console.log(this.resposeData)
        
          });
         
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
