import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PhotoTiltComponent } from '../components/photo-tilt/photo-tilt';
import { ParallaxHeader } from '../components/parallax-header/parallax-header';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PhotoTiltComponent,
    ParallaxHeader
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
