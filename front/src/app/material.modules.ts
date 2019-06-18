import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatStepperModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatButtonModule,
        MatRippleModule,
        MatInputModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatStepperModule,
        MatSelectModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatSortModule,
    MatTableModule,
    ],
    declarations: [ ],
    exports: [
        MatFormFieldModule,
        MatButtonModule,
        MatRippleModule,
        MatInputModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatStepperModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatSortModule,
        MatTableModule
    ]
})

export class MaterialModule { }
