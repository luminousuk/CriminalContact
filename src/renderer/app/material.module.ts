import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule
} from "@angular/material";

@NgModule({
    imports: [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatTooltipModule
    ],
    exports: [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatTooltipModule
    ]
})
export class MaterialModule { }