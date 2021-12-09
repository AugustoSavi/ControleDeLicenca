import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LicenceDTO } from '../../licence/models/licence.dto';
import { LicenceService } from '../../licence/services/licence.service';
import { CadastroLicenca } from './cadastroLicenca/cadastroLicenca';

@Component({
  selector: 'page-list',
  templateUrl: 'licencas.html'
})
export class LicencasPage {
  icons: string[];
  items: LicenceDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public licenceService: LicenceService
  ) {}

  ionViewDidLoad(){
    this.licenceService.findAll().subscribe(licences => {
      this.items = licences;
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(CadastroLicenca, {
      item: item
    });
  }
}

