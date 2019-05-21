import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {
  FormGroup,
  FormControl

} from '@angular/forms';
/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  total: number = 0;
  text: string;
  text2: string = "";
  choich = [];
  ans: boolean = true;
  test = {
    t1: "0",
    t2: "0",
    t3: "0",
    t4: "0",
    t5: "0",
    t6: "0",
    t7: "0",
    t8: "0",
    t9: "0",
    t10: "0",
    t11: "0",
    t12: "0",
    t13: "0",
    t14: "0",
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    // this.langForm = new FormGroup({
    //   "langs": new FormControl({value: 'rust', disabled: false})
    // });
    // this.choose1();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  choose1(event: string) {
    console.log(event);
    this.test.t1 = event;
  }
  choose2(event: string) {
    console.log(event);
    this.test.t2 = event;
  }
  choose3(event: string) {
    console.log(event);
    this.test.t3 = event;
  }
  choose4(event: string) {
    console.log(event);
    this.test.t4 = event;
  }
  choose5(event: string) {
    console.log(event);
    this.test.t5 = event;
  }
  choose6(event: string) {
    console.log(event);
    this.test.t6 = event;
  }
  choose7(event: string) {
    console.log(event);
    this.test.t7 = event;
  }
  choose8(event: string) {
    console.log(event);
    this.test.t8 = event;
  }
  choose9(event: string) {
    console.log(event);
    this.test.t9 = event;
  }
  choose10(event: string) {
    console.log(event);
    this.test.t10 = event;
  }
  choose11(event: string) {
    console.log(event);
    this.test.t11 = event;
  }
  choose12(event: string) {
    console.log(event);
    this.test.t12 = event;
  }
  choose13(event: string) {
    console.log(event);
    this.test.t13 = event;
  }
  choose14(event: string) {
    console.log(event);
    this.test.t14 = event;
  }

  sumScore() {
    this.text2 = "";
    this.ans = true; 
    this.total=0;

    if (this.test.t1 == "0") { this.ans = false; this.text2 = this.text2 + "ข้อ.1 " } 
    if (this.test.t2 == "0") { this.ans = false; this.text2 = this.text2 + "ข้อ.2 " } 
    if (this.test.t3 == "0") { this.ans = false; this.text2 = this.text2 + "ข้อ.3 " } 
    if (this.test.t4 == "0") { this.ans = false; this.text2 = this.text2 + "ข้อ.4 " }
    if (this.test.t5 == "0") { this.ans = false; this.text2 = this.text2 + "ข้อ.5 " } 
    if (this.test.t6 == "0") { this.ans = false; this.text2 = this.text2 + "ข้อ.6 " } 
    if (this.test.t7 == "0") { this.ans = false; this.text2 = this.text2 + "ข้อ.7 " } 
    if (this.test.t8 == "0") { this.ans = false; this.text2 = this.text2 + "ข้อ.8 " } 
    if (this.test.t9 == "0") { this.ans = false; this.text2 = this.text2 + "ข้อ.9 " } 
    if (this.test.t10 == "0") { this.ans = false; this.text2 = this.text2 + "ข้อ.10 " } 
    if (this.test.t11 == "0") { this.ans = false; this.text2 = this.text2 + "ข้อ.11 " } 
    if (this.test.t12 == "0") { this.ans = false; this.text2 = this.text2 + "ข้อ.12 " } 
    if (this.test.t13 == "0") { this.ans = false; this.text2 = this.text2 + "ข้อ.13 " } 
    if (this.test.t14 == "0") { this.ans = false; this.text2 = this.text2 + "ข้อ.14 " }  





    this.total = Number(parseInt(this.test.t1)) +
      Number(parseInt(this.test.t2)) + Number(parseInt(this.test.t3)) +
      Number(parseInt(this.test.t4)) + Number(parseInt(this.test.t5)) +
      Number(parseInt(this.test.t6)) + Number(parseInt(this.test.t7)) +
      Number(parseInt(this.test.t8)) + Number(parseInt(this.test.t9)) +
      Number(parseInt(this.test.t10)) + Number(parseInt(this.test.t11)) +
      Number(parseInt(this.test.t12)) + Number(parseInt(this.test.t13)) +
      Number(parseInt(this.test.t14));
    if (this.total > 14 && this.total <= 19) {
      this.text = "สมรรถภาพทางสมองอยู่ในเกณฑ์ดีมาก"
    }
    else if (this.total >= 20 && this.total <= 29) {
      this.text = "สมรรถภาพทางสมองอยู่ในระดับปานกลาง ควรเข้ารับคำแนะนำเพื่อเพิ่มสมรรถภาพทางสมอง"
    }
    else if (this.total >= 30 && this.total <= 39) {
      this.text = "สมรรถภาพทางสมองอยู่ในระดับค่อนข้างต่ำ  ควรเข้ารับคำแนะนำเพื่อเพิ่มสมรรถภาพทางสมอง"
    }
    else if (this.total >= 40 && this.total <= 56) {
      this.text = " สมรรถภาพทางสมองต่ำ ควรพบแพทย์รับการบำบัดรักษา."
    }
    console.log(this.ans);

    if (this.ans == true) {
      const alert = this.alertCtrl.create({
        title: this.text,
        // subTitle: this.text,
        buttons: ['ตกลง']

      });
      alert.present();
    } else if (this.ans == false) {
      const alert2 = this.alertCtrl.create({
        title: 'กรุณาตอบคำถามให้ครบ',
        subTitle: 'คุณยังไม่ได้ตอบข้อ ' + this.text2,
        buttons: ['ตกลง']

      });
      alert2.present();
    }
    // console.log("text2" + this.text2);
    // console.log(this.choich);
    console.log(this.total);



  }


  test2() {
    console.log(this.test);
  }
}
