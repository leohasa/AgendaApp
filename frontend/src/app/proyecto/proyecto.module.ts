import { NgModule } from '@angular/core';
import { AddProyectoComponent } from './add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from './edit-proyecto/edit-proyecto.component';
import { ListProyectoComponent } from './list-proyecto/list-proyecto.component';
import { ManagerProjectRoutesComponent } from './manager-project-routes/manager-project-routes.component';
import { SharedModule } from '../shared.module';



@NgModule({
    declarations: [
        AddProyectoComponent,
        EditProyectoComponent,
        ListProyectoComponent,
        ManagerProjectRoutesComponent
    ],
    imports: [
        SharedModule
    ]
})
export class ProyectoModule { }
