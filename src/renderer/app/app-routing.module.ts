import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { BankingComponent } from './components/banking/banking.component';
import { PlayersComponent } from './components/players/players.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GameLogComponent } from './components/gamelog/gamelog.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "players", component: PlayersComponent, },
  { path: "players/:playerId/transactions", component: TransactionsComponent, },
  { path: "banking", component: BankingComponent },
  { path: "log", component: GameLogComponent },
  { path: "settings", component: SettingsComponent },
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
