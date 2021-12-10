import { Component } from "@angular/core";
import { AlertController, IonicPage, NavController, NavParams } from "ionic-angular";
import { LicenceDTO } from "../../../licence/models/licence.dto";
import { LicenceService } from "../../../licence/services/licence.service";
import { LicencasPage } from "../licencas";

@IonicPage()
@Component({
    selector: 'page-cadastro-licenca',
    templateUrl: 'cadastroLicenca.html'
})
export class CadastroLicenca {
    selectedItem: LicenceDTO;
    buttonDeleteDisabled: boolean;
    buttonSaveDisabled: boolean;

    constructor(
        public navParams: NavParams,
        private licenceService: LicenceService,
        private navCtrl: NavController,
        private alertCtrl: AlertController,
    ){
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }

    ionViewDidLoad(){
      this.buttonDeleteDisabled = this.selectedItem.id ? false : true;
      this.validateForm()
    }

    save($event){
      this.licenceService.save(this.selectedItem).subscribe(
        () => {this.navCtrl.setRoot(LicencasPage);}
      );
    }

    delete($event, id){
      this.licenceService.delete(id).subscribe(
          () => {this.navCtrl.setRoot(LicencasPage);}
      );
    }

    showConfirm($event, id) {
      const confirm = this.alertCtrl.create({
        title: 'Excluir Licença?',
        message: 'Você tem certeza que quer excluir essa licença?',
        buttons: [
          {
            text: 'Não Excluir',
            handler: () => {}
          },
          {
            text: 'Excluir',
            handler: () => {
              this.delete($event, id);
            }
          }
        ]
      });
      confirm.present();
    }

    validateForm(){
      this.buttonSaveDisabled = (this.selectedItem.nome && this.selectedItem.email) ? false : true ;
    }
}