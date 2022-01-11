import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddActividadComponent } from './components/actividad/add-actividad/add-actividad.component';
import { EditActividadComponent } from './components/actividad/edit-actividad/edit-actividad.component';
import { ListActividadComponent } from './components/actividad/list-actividad/list-actividad.component';
import { ManagerActividadRoutesComponent } from './components/actividad/manager-actividad-routes/manager-actividad-routes.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AddCategoriaComponent } from './components/categoria/add-categoria/add-categoria.component';
import { EditCategoriaComponent } from './components/categoria/edit-categoria/edit-categoria.component';
import { ListCategoriaComponent } from './components/categoria/list-categoria/list-categoria.component';
import { ManagerCategoryRoutesComponent } from './components/categoria/manager-category-routes/manager-category-routes.component';
import { AddProyectoComponent } from './components/proyecto/add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto/edit-proyecto.component';
import { ListProyectoComponent } from './components/proyecto/list-proyecto/list-proyecto.component';
import { ManagerProjectRoutesComponent } from './components/proyecto/manager-project-routes/manager-project-routes.component';
import { ListRecordatorioComponent } from './components/categoria/recordatorio/list-recordatorio/list-recordatorio.component';
import { ManagerRecordatorioRoutesComponent } from './components/categoria/recordatorio/manager-recordatorio-routes/manager-recordatorio-routes.component';
import { AccessGuard } from './components/usuario/AccessGuard';
import { AddUsuarioComponent } from './components/usuario/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './components/usuario/edit-usuario/edit-usuario.component';
import { AddPluginComponent } from './components/usuario/editor/plugin/add-plugin/add-plugin.component';
import { AddPostComponent } from './components/usuario/editor/post/add-post/add-post.component';
import { EditPluginComponent } from './components/usuario/editor/plugin/edit-plugin/edit-plugin.component';
import { EditPostComponent } from './components/usuario/editor/post/edit-post/edit-post.component';
import { ListPluginsComponent } from './components/usuario/editor/plugin/list-plugins/list-plugins.component';
import { ListPostComponent } from './components/usuario/editor/post/list-post/list-post.component';
import { ListSolicitudesComponent } from './components/usuario/list-solicitudes/list-solicitudes.component';
import { ListUsuarioComponent } from './components/usuario/list-usuario/list-usuario.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { ManagerUserRoutesComponent } from './components/usuario/manager-user-routes/manager-user-routes.component';
import { SolicitudEditorComponent } from './components/usuario/solicitud-editor/solicitud-editor.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';
import { VisitanteComponent } from './components/usuario/perfil/visitante/visitante.component';
import { ManagerHomepageComponent } from './components/usuario/manager-homepage/manager-homepage.component';
import { VistaPostComponent } from './components/usuario/editor/vista-post/vista-post.component';
import { MisPluginsComponent } from './components/usuario/mis-plugins/mis-plugins.component';
import { AllPostsPluginComponent } from './components/usuario/all-posts-plugin/all-posts-plugin.component';
import { AllPluginsComponent } from './components/usuario/all-plugins/all-plugins.component';


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
            {path: 'allPosts', component: AllPostsPluginComponent},
            {path: 'allPlugins', component: AllPluginsComponent},
            {path: 'viewPost', component: VistaPostComponent}
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
    {path: 'homepage', component: ManagerHomepageComponent},
    {path: 'calendar-mes', component: CalendarComponent, data: {requiresLogin: true, requiredRol: 'USUARIO'}, canActivate: [AccessGuard]},
    {path: 'register', component: AddUsuarioComponent},
    {path: 'login', component: LoginComponent},
    {path: 'perfil-view/:username', component: VisitanteComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
