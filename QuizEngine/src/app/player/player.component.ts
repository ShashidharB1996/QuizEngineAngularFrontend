import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { QuestionModel } from '../QuestionModel';

@Component({
  selector: 'app-player',
  providers: [
    PlayerService
  ],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  response: any;
  questions: any;
  options: any[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  data1: any;

  constructor(private playerService: PlayerService) { }

  sendData() {
    const data = {
      test: 'This is the test data',
    };
    this.playerService.sendData(data);
    this.Next();
  }

  Next() {
    this.questions =  this.playerService.sendd();
    console.log(this.questions);
  }


  ngOnInit() { }
}





