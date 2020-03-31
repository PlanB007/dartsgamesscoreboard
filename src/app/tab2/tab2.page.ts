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
    
    // Check if hit the bull, then the game is finished
    if(this.remainingScore.toString() == 'bull' && score > 0){
      console.log('winner');
      this.presentToast();
      this.remainingScore = 1;
      return;
    }
    // new turn when score isn't 3
    if(score != 3 ) {
      this.currentTurn = this.currentTurn + 1;
    }

    // Change the remaining number to bull, since there isn't 21 in darts
    if(this.remainingScore >= 20) {
      this.remainingScore = 'bull'
      return;
    }
    
    this.remainingScore = this.remainingScore + score;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Winner!',
      duration: 5000
    });
    toast.present();
  }

}
