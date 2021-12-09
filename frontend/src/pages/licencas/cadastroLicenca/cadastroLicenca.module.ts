import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroLicenca } from './cadastroLicenca';

@NgModule({
  declarations: [
    CadastroLicenca,
  ],
  imports: [
    IonicPageModule.forChild(CadastroLicenca),
  ],
})
export class CadastroLicencaPageModule {
}
