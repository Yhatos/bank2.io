import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashInTransitComponent } from './cash-in-transit.component';


const routes: Routes = [
  {
    path: '',
    component: CashInTransitComponent,
    data: {
      title: 'Cash in Transit',
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
export class CashInTransitRoutingModule { }
