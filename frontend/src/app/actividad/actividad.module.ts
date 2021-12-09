import { NgModule } from '@angular/core';
import { AddActividadComponent } from './add-actividad/add-actividad.component';
import { EditActividadComponent } from './edit-actividad/edit-actividad.component';
import { ListActividadComponent } from './list-actividad/list-actividad.component';
import { ManagerActividadRoutesComponent } from './manager-actividad-routes/manager-actividad-routes.component';
import { SharedModule } from '../shared.module';



@NgModule({
    declarations: [
        AddActividadComponent,
        EditActividadComponent,
        ListActividadComponent,
        ManagerActividadRoutesComponent
    ],
    imports: [
        SharedModule
    ]
})
export class ActividadModule { }
