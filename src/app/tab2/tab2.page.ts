import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  remainingScore:any = 1;
  currentTurn = 1;

  constructor(public toastController: ToastController) {}

  updateScore(score:number) {
    this.remainingScore = this.remainingScore + score;

    if(score != 3 ) {
      this.currentTurn = this.currentTurn + 1;
    }
    if(this.remainingScore > 20) {
      this.remainingScore = 'bull'
    }

    if(this.remainingScore == 'bull' && score > 0){
      this.presentToast();
      this.remainingScore = 1;

    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Winner!',
      duration: 5000
    });
    toast.present();
  }

}
