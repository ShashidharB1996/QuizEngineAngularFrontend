import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player/player.service';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class McqComponent implements OnInit {
  response: any;
  questions: any[];
  options: any[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  data1: any;
  constructor() { }

  ngOnInit() {
  }

}
