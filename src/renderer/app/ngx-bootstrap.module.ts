import { NgModule } from '@angular/core';
import { BsDropdownModule, TabsModule, TooltipModule } from "ngx-bootstrap";

@NgModule({
    imports: [
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        TooltipModule.forRoot()
    ],
    exports: [
        BsDropdownModule,
        TabsModule,
        TooltipModule
    ]
})
export class NgxBootstrapModule { }