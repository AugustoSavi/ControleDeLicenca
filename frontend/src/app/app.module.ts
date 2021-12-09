import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import  {HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';
import { LicencasPage } from '../pages/licencas/licencas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LicenceService } from '../licence/services/licence.service';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { CadastroLicenca } from '../pages/licencas/cadastroLicenca/cadastroLicenca';

@NgModule({
  declarations: [
    MyApp,
    LicencasPage,
    CadastroLicenca
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LicencasPage,
    CadastroLicenca
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LicenceService,
    ErrorInterceptorProvider
  ]
})
export class AppModule {}
