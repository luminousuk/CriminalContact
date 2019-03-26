import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { NgModule, ErrorHandler } from "@angular/core";
import { NgSelectModule } from "@ng-select/ng-select";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ToastrModule } from "ngx-toastr";

import { NgxBootstrapModule } from "./ngx-bootstrap.module";
import { ModalsModule } from "./modals.module";
import { AppRoutingModule } from "./app-routing.module";

import { ElapsedTimePipe } from "./pipes/elapsed-time.pipe";
import { MathAbsPipe } from "./pipes/math-abs.pipe";

import { GlobalErrorHandlerService } from "./services/global-error-handler.service";

import { AppComponent } from "./components/app/app.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { BankingComponent } from "./components/banking/banking.component";
import { PlayersComponent } from "./components/players/players.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { GameLogComponent } from "./components/gamelog/gamelog.component";
import { TransactionsComponent } from "./components/transactions/transactions.component";

@NgModule({
  declarations: [
    ElapsedTimePipe,
    MathAbsPipe,
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    BankingComponent,
    GameLogComponent,
    PlayersComponent,
    SettingsComponent,
    TransactionsComponent
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
  providers: [
    {
      provide: ErrorHandler, useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
