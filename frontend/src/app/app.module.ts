import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddUsuarioComponent } from './components/usuario/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './components/usuario/edit-usuario/edit-usuario.component';
import { ListUsuarioComponent } from './components/usuario/list-usuario/list-usuario.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { ManagerUserRoutesComponent } from './components/usuario/manager-user-routes/manager-user-routes.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SolicitudEditorComponent } from './components/usuario/solicitud-editor/solicitud-editor.component';
import { ListSolicitudesComponent } from './components/usuario/list-solicitudes/list-solicitudes.component';
import { TxtEditComponent } from './components/txt-edit/txt-edit.component';
import { NgxEditorModule } from 'ngx-editor';
import { ListPublicacionComponent } from './components/txt-edit/list-publicacion/list-publicacion.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';
import { ModalCalendarioComponent } from './components/modal-calendario/modal-calendario.component';
import { ListRecordatorioComponent } from './components/categoria/recordatorio/list-recordatorio/list-recordatorio.component';
import { ManagerRecordatorioRoutesComponent } from './components/categoria/recordatorio/manager-recordatorio-routes/manager-recordatorio-routes.component';
import { ListPluginsComponent } from './components/usuario/editor/list-plugins/list-plugins.component';
import { ListPostComponent } from './components/usuario/editor/list-post/list-post.component';
import { AddPostComponent } from './components/usuario/editor/add-post/add-post.component';
import { AddPluginComponent } from './components/usuario/editor/add-plugin/add-plugin.component';
import { EditPluginComponent } from './components/usuario/editor/edit-plugin/edit-plugin.component';
import { EditPostComponent } from './components/usuario/editor/edit-post/edit-post.component';
import { ComentarioComponent } from './components/comentario/comentario.component';

import { ContactComponent } from './components/usuario/perfil/contact/contact.component';
import { FindContactComponent } from './components/usuario/perfil/find-contact/find-contact.component';
import { NgxPopperjsModule, NgxPopperjsDirective } from 'ngx-popperjs';
import { VisitanteComponent } from './components/usuario/perfil/visitante/visitante.component';
import { PuntuacionComponent } from './components/puntuacion/puntuacion.component';
//import { NgxPopperjsDirective } from 'ngx-popperjs';
import { ManagerHomepageComponent } from './components/usuario/manager-homepage/manager-homepage.component';
import { ReminderModalComponent } from './components/reminder-modal/reminder-modal.component';
import { ActivityModalComponent } from './components/activity-modal/activity-modal.component';
import { VistaPostComponent } from './components/usuario/editor/vista-post/vista-post.component';
import { MisPluginsComponent } from './components/usuario/mis-plugins/mis-plugins.component';
import { AllPostsPluginComponent } from './components/usuario/all-posts-plugin/all-posts-plugin.component';
import { AllPluginsComponent } from './components/usuario/all-plugins/all-plugins.component';
import { CoreModule } from './core.module';
import { SharedModule } from './shared.module';
import { CategoriaModule } from './components/categoria/categoria.module';
import { ActividadModule } from './components/actividad/actividad.module';
import { ProyectoModule } from './components/proyecto/proyecto.module';

@NgModule({
    declarations: [
        AppComponent,
        AddUsuarioComponent,
        EditUsuarioComponent,
        ListUsuarioComponent,
        LoginComponent,
        ManagerUserRoutesComponent,
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
        TxtEditComponent,
        ReminderModalComponent,
        ActivityModalComponent,
        VistaPostComponent,
        MisPluginsComponent,
        AllPostsPluginComponent,
        AllPluginsComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        NgxEditorModule,
        NgxPopperjsModule,
        SharedModule,
        CategoriaModule,
        ActividadModule,
        ProyectoModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
