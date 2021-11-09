import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddActividadComponent } from './actividad/add-actividad/add-actividad.component';
import { EditActividadComponent } from './actividad/edit-actividad/edit-actividad.component';
import { ListActividadComponent } from './actividad/list-actividad/list-actividad.component';
import { ManagerActividadRoutesComponent } from './actividad/manager-actividad-routes/manager-actividad-routes.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AddCategoriaComponent } from './categoria/add-categoria/add-categoria.component';
import { EditCategoriaComponent } from './categoria/edit-categoria/edit-categoria.component';
import { ListCategoriaComponent } from './categoria/list-categoria/list-categoria.component';
import { ManagerCategoryRoutesComponent } from './categoria/manager-category-routes/manager-category-routes.component';
import { AddProyectoComponent } from './proyecto/add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from './proyecto/edit-proyecto/edit-proyecto.component';
import { ListProyectoComponent } from './proyecto/list-proyecto/list-proyecto.component';
import { ManagerProjectRoutesComponent } from './proyecto/manager-project-routes/manager-project-routes.component';
import { ListRecordatorioComponent } from './recordatorio/list-recordatorio/list-recordatorio.component';
import { ManagerRecordatorioRoutesComponent } from './recordatorio/manager-recordatorio-routes/manager-recordatorio-routes.component';
import { AccessGuard } from './usuario/AccessGuard';
import { AddUsuarioComponent } from './usuario/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './usuario/edit-usuario/edit-usuario.component';
import { AddPluginComponent } from './usuario/editor/add-plugin/add-plugin.component';
import { AddPostComponent } from './usuario/editor/add-post/add-post.component';
import { EditPluginComponent } from './usuario/editor/edit-plugin/edit-plugin.component';
import { EditPostComponent } from './usuario/editor/edit-post/edit-post.component';
import { ListPluginsComponent } from './usuario/editor/list-plugins/list-plugins.component';
import { ListPostComponent } from './usuario/editor/list-post/list-post.component';
import { ListSolicitudesComponent } from './usuario/list-solicitudes/list-solicitudes.component';
import { ListUsuarioComponent } from './usuario/list-usuario/list-usuario.component';
import { LoginComponent } from './usuario/login/login.component';
import { ManagerUserRoutesComponent } from './usuario/manager-user-routes/manager-user-routes.component';
import { SolicitudEditorComponent } from './usuario/solicitud-editor/solicitud-editor.component';
import { TxtEditComponent } from './txt-edit/txt-edit.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { ListPublicacionComponent } from './txt-edit/list-publicacion/list-publicacion.component';
import { ManagerHomepageComponent } from './usuario/manager-homepage/manager-homepage.component';
import { VistaPostComponent } from './usuario/editor/vista-post/vista-post.component';
import { MisPluginsComponent } from './usuario/mis-plugins/mis-plugins.component';
import { AllPostsPluginComponent } from './usuario/all-posts-plugin/all-posts-plugin.component';

const routes: Routes = [
    {path: 'user', component: ManagerUserRoutesComponent,
        data: {requiresLogin: true, requiredRol: 'USUARIO'},
        canActivate: [AccessGuard],
        children: [
            {path: 'edit', component: EditUsuarioComponent},
            {path: 'userlist', component: ListUsuarioComponent},
            {path: 'solicitud', component: SolicitudEditorComponent},
            {path: 'perfil', component: PerfilComponent},
            {path: 'misPlugins', component: MisPluginsComponent},
            {path: 'allPosts', component: AllPostsPluginComponent}
        ]
    },
    {path: 'admin', component: ManagerUserRoutesComponent,
        data: {requiresLogin: true, requiredRol: 'ADMINISTRADOR'},
        canActivate: [AccessGuard],
        children: [
            {path: 'solicitudes', component: ListSolicitudesComponent}
        ]
    },
    {path: 'plugin', component: ManagerUserRoutesComponent,
        data: {requiresLogin: true, requiredRol: 'EDITOR'},
        canActivate: [AccessGuard],
        children: [
            {path: 'list', component: ListPluginsComponent},
            {path: 'add', component: AddPluginComponent},
            {path: 'edit', component: EditPluginComponent}
        ]
    },
    {path: 'post', component: ManagerUserRoutesComponent,
        data: {requiresLogin: true, requiredRol: 'EDITOR'},
        canActivate: [AccessGuard],
        children: [
            {path: 'list', component: ListPostComponent},
            {path: 'add', component: AddPostComponent},
            {path: 'edit', component: EditPostComponent},
            {path: 'view', component: VistaPostComponent}
        ]
    },
    {path: 'proyecto', component:ManagerProjectRoutesComponent,
        data: {requiresLogin: true, requiredRol: 'USUARIO'},
        canActivate: [AccessGuard],
        children: [
            {path: 'add', component: AddProyectoComponent},
            {path: 'edit', component: EditProyectoComponent},
            {path: 'list', component: ListProyectoComponent}
        ]
    },
    {path: 'actividad', component: ManagerActividadRoutesComponent,
        data: {requiresLogin: true, requiredRol: 'USUARIO'},
        canActivate: [AccessGuard],
        children: [
            {path: 'add', component: AddActividadComponent},
            {path: 'edit', component: EditActividadComponent},
            {path: 'list', component: ListActividadComponent}
        ]
    },
    {path: 'categoria', component: ManagerCategoryRoutesComponent,
        data: {requiresLogin: true, requiredRol: 'USUARIO'},
        canActivate: [AccessGuard],
        children: [
            {path: 'add', component: AddCategoriaComponent},
            {path: 'edit', component: EditCategoriaComponent},
            {path: 'list', component: ListCategoriaComponent}
        ]
    },
    {path: 'recordatorio', component: ManagerRecordatorioRoutesComponent,
        data: {requiresLogin: true, requiredRol: 'USUARIO'},
        canActivate: [AccessGuard],
        children: [
            {path: 'list', component: ListRecordatorioComponent}
        ]
    },
    {path:'homepage', component: ManagerHomepageComponent},
    {path: 'calendar-mes', component: CalendarComponent, data: {requiresLogin: true, requiredRol: 'USUARIO'}, canActivate: [AccessGuard]},
    {path: 'register', component: AddUsuarioComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
