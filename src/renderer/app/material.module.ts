import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule
} from "@angular/material";

@NgModule({
    imports: [
        FlexLayoutModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatSidenavModule,
        MatTooltipModule
    ],
    exports: [
        FlexLayoutModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatSidenavModule,
        MatTooltipModule
    ]
})
export class MaterialModule { }