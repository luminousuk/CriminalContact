import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgSelectModule } from "@ng-select/ng-select";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ToastrModule } from "ngx-toastr";

import { NgxBootstrapModule } from "./ngx-bootstrap.module";
import { ModalsModule } from "./modals.module";

import { ElapsedTimePipe } from "./pipes/elapsed-time.pipe";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BankingComponent } from './components/banking/banking.component';
import { PlayersComponent } from './components/players/players.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    ElapsedTimePipe,
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    BankingComponent,
    PlayersComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgxBootstrapModule,
    NgSelectModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
      toastClass: "toast toast-bootstrap-compatibility-fix"
    }),
    CurrencyMaskModule,
    ModalsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
