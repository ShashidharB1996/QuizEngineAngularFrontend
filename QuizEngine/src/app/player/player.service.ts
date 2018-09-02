import { HubConnectionBuilder, HubConnection } from '@aspnet/signalr';
import { Injectable, EventEmitter } from '@angular/core';
import { send } from 'q';
import { PlayerComponent } from './player.component';
import { QuestionModel } from '../QuestionModel';
@Injectable()
export class PlayerService
{
  private _connection: HubConnection;
 //this.registerOnServerEvents();
  messageReceived = new EventEmitter<string>();
  public DATA: QuestionModel;
  constructor()
  {
    this._connection = new HubConnectionBuilder().withUrl("http://localhost:8050/question").build();

    this._connection.on('hello', msg => {
      console.log(msg);
      this.DATA = msg;
    });
   // this.sendd(msg);
    //this.registerOnServerEvents();
    this._connection.start().then(() => console.log('MessageHub Connected'));
  }

  sendData(data) {
    this._connection.invoke('send', data.this);
    this._connection.on('send', msg => {
      console.log("inside on");
    });

  }
  rData() {
    this._connection.invoke('recieve');
  this._connection.on('recieve', msg => {
    console.log("inside on");
  });

}
sendd()
{
 return this.DATA;
}

}
