import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DraftInTransitComponent } from './draft-in-transit.component';



const routes: Routes = [
  {
    path: '',
    component: DraftInTransitComponent,
    data: {
      title: 'Other Banks',
      icon: 'icon-corner-down-left',
      caption: 'Send money to anyone. Its Quick and Easy',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraftInTransitRoutingModule { }
