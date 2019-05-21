import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ShowCalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-calendar',
  templateUrl: 'show-calendar.html',
})
export class ShowCalendarPage {
  dayString:string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowCalendarPage');
  }
  onDaySelect(data){
    console.log(data);
    this.dayString = data.year+"-"+data.month+"-"+data.date
    console.log(this.dayString);
    
  }

}
