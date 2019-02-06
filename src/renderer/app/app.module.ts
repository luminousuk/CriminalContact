import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ElapsedTimePipe } from "./pipes/elapsed-time.pipe";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankTestComponent } from './bank-test/bank-test.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BankingComponent } from './banking/banking.component';
import { PlayersComponent } from './players/players.component';
import { SelectPlayerComponent } from './select-player/select-player.component';

@NgModule({
  declarations: [
    ElapsedTimePipe,
    AppComponent,
    BankTestComponent,
    SidebarComponent,
    DashboardComponent,
    BankingComponent,
    PlayersComponent,
    SelectPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
