import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { BankingComponent } from './components/banking/banking.component';
import { PlayersComponent } from './components/players/players.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "players", component: PlayersComponent },
  { path: "banking", component: BankingComponent },
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
