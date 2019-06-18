import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.modules';

import { HeaderComponent } from './comonents/header/header.component';
import { BodyComponent } from './comonents/body/body.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        HeaderComponent,
        BodyComponent
    ],
    exports: [
        HeaderComponent,
        BodyComponent,
        MaterialModule
    ]
})

export class SharedModule { }
