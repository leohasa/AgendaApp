import { NgModule } from '@angular/core';
import { ListPluginsComponent } from './list-plugins/list-plugins.component';
import { AddPluginComponent } from './add-plugin/add-plugin.component';
import { EditPluginComponent } from './edit-plugin/edit-plugin.component';
import { SharedModule } from 'src/app/shared.module';
import { MisPluginsComponent } from '../../mis-plugins/mis-plugins.component';
import { AllPluginsComponent } from '../../all-plugins/all-plugins.component';



@NgModule({
    declarations: [
        ListPluginsComponent,
        AddPluginComponent,
        EditPluginComponent,
        MisPluginsComponent,
        AllPluginsComponent
    ],
    imports: [
        SharedModule
    ]
})
export class PluginModule { }
