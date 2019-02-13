import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgSelectModule } from "@ng-select/ng-select";
import { CurrencyMaskModule } from "ng2-currency-mask";

import { ElapsedTimePipe } from "./pipes/elapsed-time.pipe";

import { NgxBootstrapModule } from "./ngx-bootstrap.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BankingComponent } from './components/banking/banking.component';
import { PlayersComponent } from './components/players/players.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PlayerModalComponent } from './components/player-modal/player-modal.component';

@NgModule({
  declarations: [
    ElapsedTimePipe,
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    BankingComponent,
    PlayersComponent,
    SettingsComponent,
    PlayerModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxBootstrapModule,
    NgSelectModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PlayerModalComponent
  ]
})
export class AppModule { }
