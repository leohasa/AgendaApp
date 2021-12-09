import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';



@NgModule({
    declarations: [
        ModalComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        ModalComponent
    ]
})
export class SharedModule { }
