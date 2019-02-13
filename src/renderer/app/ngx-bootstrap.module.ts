import { NgModule } from '@angular/core';
import { BsDropdownModule, ModalModule, TabsModule, TooltipModule } from "ngx-bootstrap";

@NgModule({
    imports: [
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        TooltipModule.forRoot()
    ],
    exports: [
        BsDropdownModule,
        ModalModule,
        TabsModule,
        TooltipModule
    ]
})
export class NgxBootstrapModule { }