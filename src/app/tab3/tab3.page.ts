import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  currentGameType: string = 'X01';
  GameSelected: boolean = false;
  remainingScore: number;
  currentTurn: number = 1;
  score: string;
  invalidCheckout: any = [169, 168, 166, 165, 163, 162, 159]
  

  constructor(
    public modalControler: ModalController
  ) {}

  gameType(gameType:number) {
    switch(gameType) {
      case 301:
        this.currentGameType = '301';
        this.GameSelected = true;
        this.remainingScore = 301;
        break;
      case 501:
        this.currentGameType = '501';
        this.GameSelected = true;
        this.remainingScore = 166;
        break;
      case 701:
        this.currentGameType = '701';
        this.GameSelected = true;
        this.remainingScore = 701;
        break;
      default:
        break;
    }
  }

  resetGame() {
    this.currentGameType = 'X01';
    this.GameSelected = false;
    this.remainingScore = 0;
    this.currentTurn = 1;
    this.score = '';
  }

  submitScore() {
    if(Number(this.score) < 181){
      this.currentTurn++;
      this.countScore();
    } else {
      this.score = '';
    }
    
  }

  updateScore(int:string) {
    if(!this.score) {
      this.score = int.toString();
    } else {
      console.log();
      if(this.score.length < 3) {
        this.score = `${this.score}${int}`;
      }
    }
  }

  editScore() {
    this.score = this.score.slice(0, -1);
  }

  countScore() {
    this.remainingScore = this.remainingScore - Number(this.score);

    //When remainingScore & score are equal to one of these number do nothing
    //When score is larger then remaningScore do nothing
  }

}
