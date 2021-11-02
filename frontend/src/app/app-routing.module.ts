import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddActividadComponent } from './actividad/add-actividad/add-actividad.component';
import { EditActividadComponent } from './actividad/edit-actividad/edit-actividad.component';
import { ListActividadComponent } from './actividad/list-actividad/list-actividad.component';
import { ManagerActividadRoutesComponent } from './actividad/manager-actividad-routes/manager-actividad-routes.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarioDiaComponent } from './calendario/calendario-dia/calendario-dia.component';
import { CalendarioMesComponent } from './calendario/calendario-mes/calendario-mes.component';
import { AddCategoriaComponent } from './categoria/add-categoria/add-categoria.component';
import { EditCategoriaComponent } from './categoria/edit-categoria/edit-categoria.component';
import { ListCategoriaComponent } from './categoria/list-categoria/list-categoria.component';
import { ManagerCategoryRoutesComponent } from './categoria/manager-category-routes/manager-category-routes.component';
import { AddProyectoComponent } from './proyecto/add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from './proyecto/edit-proyecto/edit-proyecto.component';
import { ListProyectoComponent } from './proyecto/list-proyecto/list-proyecto.component';
import { ManagerProjectRoutesComponent } from './proyecto/manager-project-routes/manager-project-routes.component';
import { AccessGuard } from './usuario/AccessGuard';
import { AddUsuarioComponent } from './usuario/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './usuario/edit-usuario/edit-usuario.component';
import { ListSolicitudesComponent } from './usuario/list-solicitudes/list-solicitudes.component';
import { ListUsuarioComponent } from './usuario/list-usuario/list-usuario.component';
import { LoginComponent } from './usuario/login/login.component';
import { ManagerUserRoutesComponent } from './usuario/manager-user-routes/manager-user-routes.component';
import { SolicitudEditorComponent } from './usuario/solicitud-editor/solicitud-editor.component';



import { TxtEditComponent } from './txt-edit/txt-edit.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { ListPublicacionComponent } from './txt-edit/list-publicacion/list-publicacion.component'; 

const routes: Routes = [
    {path: 'user', component: ManagerUserRoutesComponent,
        data: {requiresLogin: true, requiredRol: 'USUARIO'},
        canActivate: [AccessGuard],
        children: [
            {path: 'edit', component: EditUsuarioComponent},
            {path: 'userlist', component: ListUsuarioComponent},
            {path: 'solicitud', component: SolicitudEditorComponent},
            {path: 'solicitudes', component: ListSolicitudesComponent}
        ]
    },
    {path: 'proyecto', component:ManagerProjectRoutesComponent,
        data: {requiresLogin: true, requiredRol: 'USUARIO'},
        canActivate: [AccessGuard],
        children: [
            {path: 'add', component: AddProyectoComponent},
            {path: 'edit', component: EditProyectoComponent},
            {path: 'list', component: ListProyectoComponent},
        ]
    },
    {path: 'actividad', component: ManagerActividadRoutesComponent,
        data: {requiresLogin: true, requiredRol: 'USUARIO'},
        canActivate: [AccessGuard],
        children: [
            {path: 'add', component: AddActividadComponent},
            {path: 'edit', component: EditActividadComponent},
            {path: 'list', component: ListActividadComponent},
        ]
    },
    {path: 'categoria', component: ManagerCategoryRoutesComponent,
        data: {requiresLogin: true, requiredRol: 'USUARIO'},
        canActivate: [AccessGuard],
        children: [
            {path: 'add', component: AddCategoriaComponent},
            {path: 'edit', component: EditCategoriaComponent},
            {path: 'list', component: ListCategoriaComponent},
        ]
    },
    {path: 'perfil', component: PerfilComponent},
    {path: 'calendar-mes', component: CalendarComponent},
    {path: 'register', component: AddUsuarioComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
