import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { McqComponent } from './mcq/mcq.component';
import {MaterialModule} from '../materialmodule';
import { FormsModule } from '@angular/forms';
import { MatRadioModule} from '@angular/material/radio';
import { PlayerService } from './player/player.service';
@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    McqComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatRadioModule,
    MaterialModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
