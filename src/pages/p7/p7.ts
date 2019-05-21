import { Component } from '@angular/core';
import { InputgamePage } from '../inputgame/inputgame';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';
import { GamePage } from '../game/game';

/**
 * Generated class for the P7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p7',
  templateUrl: 'p7.html',
})
export class P7Page {
  items:any;
  public resposeData:any;
  public data:any;
  userData = {
    "id_game": '',
    "id_doctor": "",
    "game_name":"", 
    "game_detail": "",
    "game_link": ""
  };
  userDatap = {
    "id_doctor": ""
  };
  userDetails = { "user_id": "" };
  public sid:any;

  constructor(public app: App,public storage:Storage,public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.storage.get('userData').then((val) =>{
     var val = JSON.parse(val);
     this.userDetails.user_id = val;
     this.sid = this.userDetails.user_id;
      console.log('ionViewDidLoa  d P7PageconStuc');
        this.showGame();
     });
    }
    ionViewWillEnter(){
      console.log('ionViewWillEnter P7Page');
      this.showGame();
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad P7Page');
  }
  showGame(){
    this.userDatap.id_doctor=this.sid;
    this.authService.PostData(this.userDatap, "getgamedoc").then((result)=>{
      this.resposeData = result;
      console.log(result)
      if (this.resposeData.pattient) {
       this.data = this.resposeData.pattient; 
        this.items =this.data;
      }
     else {
        console.log(this.resposeData, "not conn");
     }
    }, (err) => {
      console.error(err);
    });
  }

  game(){
    this.navCtrl.push(GamePage);
  }
}
