import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';
/**
 * Generated class for the P5detailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p5detail',
  templateUrl: 'p5detail.html',
})
export class P5detailPage {
  getTopic: any
  getDetail: any
  getTime: any
  imgUrl: any
  item:any
  public data: any;
  resposeData: any
  storyId: any
  story = {
    id: null
  }
  s

  constructor(public alertCtrl: AlertController, public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.story.id = navParams.get('story_id');
    this.storyId = navParams.get('story_id');
    console.log(this.story.id);
    this.getStory();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad P5detailPage');
    this.story.id = this.navParams.get('story_id');
    this.storyId = this.navParams.get('story_id');
  }


  getStory() {
    
    this.story.id = this.navParams.get('story_id');
    this.storyId = this.navParams.get('story_id');
    console.log("id:"+this.storyId)
    this.authService.PostData(this.story, "getstory").then((result) => {
      this.resposeData = result;
      if (this.resposeData.patient) {
        this.data = this.resposeData.patient;
       this.item = this.data
       console.log(this.data);

      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }

  test() {
    this.story.id = this.navParams.get('story_id');
    this.storyId = this.navParams.get('story_id');
    this.getStory();
  }

}

