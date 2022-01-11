import { NgModule } from '@angular/core';
import { TxtEditComponent } from './txt-edit.component';
import { NgxEditorModule } from 'ngx-editor';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
    declarations: [
        TxtEditComponent
    ],
    imports: [
        NgxEditorModule,
        SharedModule
    ],
    exports: [
        TxtEditComponent
    ]
})
export class EditorModule { }
