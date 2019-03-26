import { NgModule } from "@angular/core";
import { BsDropdownModule, ButtonsModule, TabsModule, TooltipModule } from "ngx-bootstrap";

@NgModule({
    imports: [
        BsDropdownModule.forRoot(),
        ButtonsModule.forRoot(),
        TabsModule.forRoot(),
        TooltipModule.forRoot()
    ],
    exports: [
        BsDropdownModule,
        ButtonsModule,
        TabsModule,
        TooltipModule
    ]
})
export class NgxBootstrapModule { }
