import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-entry',
  templateUrl: 'new-entry.html',
})
export class NewEntryPage {

  entry = {
    value: '0,00',
    category: 1
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewEntryPage');
  }

  submitForm(){
    console.log('Submit form');
    console.log(this.entry);

    //rotinas do banco de dados
    
    this.goBack();
  }

  goBack(){
    console.log('Go Back');

    // sair sem fazer nada
    this.navCtrl.pop();
  }
}
