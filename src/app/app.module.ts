import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { CallNumber } from '@ionic-native/call-number';
import { GoogleMapComponent } from '../components/google-map/google-map';

import { SN1 } from '../pages/sn1/sn1';
import { HomePage } from '../pages/home/home';
import { Geolocation } from '@ionic-native/geolocation';
import {InfouserPage} from '../pages/infouser/infouser';
import { P2Page } from '../pages/p2/p2';
import { P3Page } from '../pages/p3/p3';
import { P4Page } from '../pages/p4/p4';
import { P5Page } from '../pages/p5/p5';
import { P6Page } from '../pages/p6/p6';
import { P7Page } from '../pages/p7/p7';

import { InputgamePage } from '../pages/inputgame/inputgame';
import { RegisterPage } from '../pages/register/register';
import { ShowmePage } from '../pages/showme/showme';
import { CreatethemePage } from '../pages/createtheme/createtheme';
import { ResultsymPage } from '../pages/resultsym/resultsym';
import { ShowdrugPage } from '../pages/showdrug/showdrug';
import { SearchPage } from '../pages/search/search';
import { GamedocPage } from '../pages/gamedoc/gamedoc';
import { ListpatPage } from '../pages/listpat/listpat';
import { HttpClientModule } from '@angular/common/http';

import { AuthServiceProvider } from '../providers/auth-service';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { ShowdocPage } from '../pages/showdoc/showdoc';
import { MenudoctorPage } from '../pages/menudoctor/menudoctor';
import { MaPage } from '../pages/ma/ma';
import { MapPage } from '../pages/map/map';
import { ForgotpassPage } from '../pages/forgotpass/forgotpass';
import { StorydocPage } from '../pages/storydoc/storydoc';
import { CreatstoryPage } from '../pages/creatstory/creatstory';
import { EditstoryPage } from '../pages/editstory/editstory';
import { QapostPage } from '../pages/qapost/qapost';
import { ShowdatapatPage } from '../pages/showdatapat/showdatapat';
import { P5detailPage } from '../pages/p5detail/p5detail';
import { EditdrugPage } from '../pages/editdrug/editdrug';
import { EditdatPage } from '../pages/editdat/editdat';
import { StorybydocPage } from '../pages/storybydoc/storybydoc';
import { EditgamebydocPage } from '../pages/editgamebydoc/editgamebydoc';
import { ShowDataPatientPage } from '../pages/show-data-patient/show-data-patient';
import { ShowActivityPatientPage } from '../pages/show-activity-patient/show-activity-patient';
import { CalendarModule } from 'ionic3-calendar-en';
import { ShowCalendarPage } from '../pages/show-calendar/show-calendar';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { CallPage } from '../pages/Call/call';
import { ShowSymtomsPage } from '../pages/show-symtoms/show-symtoms';
import { ShowAllPage } from '../pages/show-all/show-all';
import { HistorysymPage } from '../pages/historysym/historysym';
import { ShowOnlySymptomsPage } from '../pages/show-only-symptoms/show-only-symptoms';
import { GamePage } from '../pages/game/game';
import { ContactPage } from '../pages/contact/contact';


@NgModule({
  declarations: [
    MyApp,
    SN1,
    HomePage,
    InfouserPage,
    P2Page,
    P3Page,
    P4Page,
    P5Page,
    P6Page,
    P7Page,
    ShowAllPage,
    HistorysymPage,
   ShowSymtomsPage,
    CallPage,
    RegisterPage,
    ShowmePage,
    CreatethemePage,
    ResultsymPage,
    ShowdrugPage,
    ShowdocPage,
    MenudoctorPage,
    MaPage,
    ForgotpassPage,
    SearchPage,
    GamedocPage,
    InputgamePage,
    ListpatPage,
    StorydocPage,
    CreatstoryPage,
    EditstoryPage,
    QapostPage,
    ShowdatapatPage,
    P5detailPage,
    EditdrugPage,
    EditdatPage,
    ShowCalendarPage,
    StorybydocPage,
    EditgamebydocPage,
    ShowDataPatientPage,
    ShowActivityPatientPage,
    MapPage,
    GoogleMapComponent,
    ShowOnlySymptomsPage,
    GamePage,
    ContactPage

  ],
  imports: [
    CalendarModule,
    BrowserModule,HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SN1,
    HomePage,
    InfouserPage,
    P2Page,
    P3Page,
    P4Page,
    P5Page,
    P6Page,
    P7Page,
    ShowAllPage,
    HistorysymPage,
    ShowSymtomsPage,
    CallPage,
    RegisterPage,
    ShowmePage,
    CreatethemePage,
    ResultsymPage,
    ShowdrugPage,
    ShowdocPage,
    MenudoctorPage,
    ShowCalendarPage,
    MaPage,
    ForgotpassPage,
    SearchPage,
    GamedocPage,
    InputgamePage,
    ListpatPage,
    StorydocPage,
    CreatstoryPage,
    EditstoryPage,
    QapostPage,
    ShowdatapatPage,
    P5detailPage,
    EditdrugPage,
    EditdatPage,
    StorybydocPage,
    EditgamebydocPage,
    ShowDataPatientPage,
    ShowActivityPatientPage,
    MapPage,
    GoogleMapComponent,
    ShowOnlySymptomsPage,
    GamePage,
    ContactPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    LocalNotifications,
   
  ]
})
export class AppModule {}
