import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { CurrencyMaskModule } from "ng2-currency-mask";

import { BaseModalComponent } from "./components/modals/base-modal.component";
import { ConfirmModalComponent } from "./components/modals/confirm/confirm-modal.component";
import { PlayerModalComponent } from "./components/modals/player/player-modal.component";

@NgModule({
    declarations: [
        BaseModalComponent,
        ConfirmModalComponent,
        PlayerModalComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgSelectModule,
        ModalModule.forRoot(),
        CurrencyMaskModule
    ],
    exports: [
        ModalModule
    ],
    entryComponents: [
        ConfirmModalComponent,
        PlayerModalComponent
    ]
})
export class ModalsModule { }