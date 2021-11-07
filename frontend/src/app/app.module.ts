import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUsuarioComponent } from './usuario/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './usuario/edit-usuario/edit-usuario.component';
import { ListUsuarioComponent } from './usuario/list-usuario/list-usuario.component';
import { AddCategoriaComponent } from './categoria/add-categoria/add-categoria.component';
import { EditCategoriaComponent } from './categoria/edit-categoria/edit-categoria.component';
import { ListCategoriaComponent } from './categoria/list-categoria/list-categoria.component';
import { AddActividadComponent } from './actividad/add-actividad/add-actividad.component';
import { EditActividadComponent } from './actividad/edit-actividad/edit-actividad.component';
import { ListActividadComponent } from './actividad/list-actividad/list-actividad.component';
import { AddProyectoComponent } from './proyecto/add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from './proyecto/edit-proyecto/edit-proyecto.component';
import { ListProyectoComponent } from './proyecto/list-proyecto/list-proyecto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from './service/usuario.service';
import { CategoriaService } from './service/categoria.service';
import { ProyectoService } from './service/proyecto.service';
import { ActividadService } from './service/actividad.service';
import { LoginComponent } from './usuario/login/login.component';
import { AccessGuard } from './usuario/AccessGuard';
import { ManagerUserRoutesComponent } from './usuario/manager-user-routes/manager-user-routes.component';
import { ManagerProjectRoutesComponent } from './proyecto/manager-project-routes/manager-project-routes.component';
import { ManagerCategoryRoutesComponent } from './categoria/manager-category-routes/manager-category-routes.component';
import { ManagerActividadRoutesComponent } from './actividad/manager-actividad-routes/manager-actividad-routes.component';
import { ModalComponent } from './modal/modal.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SolicitudEditorComponent } from './usuario/solicitud-editor/solicitud-editor.component';
import { ListSolicitudesComponent } from './usuario/list-solicitudes/list-solicitudes.component';
import { TxtEditComponent } from './txt-edit/txt-edit.component';
import { NgxEditorModule } from 'ngx-editor';
import { ForoService } from './service/foro.service';
import { ListPublicacionComponent } from './txt-edit/list-publicacion/list-publicacion.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { ModalCalendarioComponent } from './modal-calendario/modal-calendario.component';
import { ListRecordatorioComponent } from './recordatorio/list-recordatorio/list-recordatorio.component';
import { ManagerRecordatorioRoutesComponent } from './recordatorio/manager-recordatorio-routes/manager-recordatorio-routes.component';
import { DataService } from './service/data.service';
import { ListPluginsComponent } from './usuario/editor/list-plugins/list-plugins.component';
import { ListPostComponent } from './usuario/editor/list-post/list-post.component';
import { AddPostComponent } from './usuario/editor/add-post/add-post.component';
import { AddPluginComponent } from './usuario/editor/add-plugin/add-plugin.component';
import { EditPluginComponent } from './usuario/editor/edit-plugin/edit-plugin.component';
import { EditPostComponent } from './usuario/editor/edit-post/edit-post.component';
import { SolicitudService } from './service/solicitud.service';
import { PluginService } from './service/plugin.service';
import { PostService } from './service/post.service';
import { ComentarioComponent } from './comentario/comentario.component';

import { ContactComponent } from './usuario/perfil/contact/contact.component';
import { FindContactComponent } from './usuario/perfil/find-contact/find-contact.component';
import { NgxPopperjsModule, NgxPopperjsDirective } from 'ngx-popperjs';
import { VisitanteComponent } from './usuario/perfil/visitante/visitante.component';
import { PuntuacionComponent } from './puntuacion/puntuacion.component';
//import { NgxPopperjsDirective } from 'ngx-popperjs';
import { RecordatorioService } from './service/recordatorio.service';
import { NotificacionService } from './service/notificacion.service';
import { ManagerHomepageComponent } from './usuario/manager-homepage/manager-homepage.component';


@NgModule({
    declarations: [
        AppComponent,
        AddUsuarioComponent,
        EditUsuarioComponent,
        ListUsuarioComponent,
        AddCategoriaComponent,
        EditCategoriaComponent,
        ListCategoriaComponent,
        AddActividadComponent,
        EditActividadComponent,
        ListActividadComponent,
        AddProyectoComponent,
        EditProyectoComponent,
        ListProyectoComponent,
        LoginComponent,
        ManagerUserRoutesComponent,
        ManagerProjectRoutesComponent,
        ManagerCategoryRoutesComponent,
        ManagerActividadRoutesComponent,
        ModalComponent,
        CalendarComponent,
        SolicitudEditorComponent,
        ListPublicacionComponent,
        ListSolicitudesComponent,
        PerfilComponent,
        ModalCalendarioComponent,
        ListRecordatorioComponent,
        ManagerRecordatorioRoutesComponent,
        ComentarioComponent,
        ContactComponent,
        FindContactComponent,
        VisitanteComponent,
        PuntuacionComponent,
        ListPluginsComponent,
        ListPostComponent,
        AddPostComponent,
        AddPluginComponent,
        EditPluginComponent,
        EditPostComponent,
        ComentarioComponent,
        ManagerHomepageComponent,
        TxtEditComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgxEditorModule,
        NgxPopperjsModule,
        
        
    ],
    providers:
    [
        UsuarioService,
        CategoriaService,
        ProyectoService,
        ActividadService,
        AccessGuard,
        ForoService,
        DataService,
        RecordatorioService,
        NotificacionService,
        SolicitudService,
        PluginService,
        PostService,
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
