import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import {McqComponent} from './mcq/mcq.component';
import {MaterialModule} from '../materialmodule';
//import { PalyerComponent } from './palyer.component';
const routes: Routes = [
  {path:'', redirectTo:'player', pathMatch: 'full'},
{path:'player', component:PlayerComponent},
{path: 'mcq', component: McqComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PlayerComponent]
