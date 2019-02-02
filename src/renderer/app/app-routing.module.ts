import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { BankingComponent } from './banking/banking.component';
import { BankTestComponent } from "./bank-test/bank-test.component";
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "players", component: PlayersComponent },
  { path: "banking", component: BankingComponent },
  { path: "bank-test", component: BankTestComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
