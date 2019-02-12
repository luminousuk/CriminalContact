import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgSelectModule } from "@ng-select/ng-select";
import { CurrencyMaskModule } from "ng2-currency-mask";

import { ElapsedTimePipe } from "./pipes/elapsed-time.pipe";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material.module";
import { AppComponent } from "./components/app/app.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { BankingComponent } from "./components/banking/banking.component";
import { PlayersComponent } from "./components/players/players.component";
import { CreatePlayerComponent } from './components/dialogs/create-player/create-player.component';

@NgModule({
  declarations: [
    ElapsedTimePipe,
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    BankingComponent,
    PlayersComponent,
    CreatePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgSelectModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CreatePlayerComponent
  ]
})
export class AppModule { }
