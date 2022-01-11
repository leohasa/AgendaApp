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
import { ListPublicacionComponent } from './components/txt-edit/list-publicacion/list-publicacion.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';
import { ModalCalendarioComponent } from './components/modal-calendario/modal-calendario.component';
import { ListRecordatorioComponent } from './components/categoria/recordatorio/list-recordatorio/list-recordatorio.component';
import { ManagerRecordatorioRoutesComponent } from './components/categoria/recordatorio/manager-recordatorio-routes/manager-recordatorio-routes.component';
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
import { CoreModule } from './core.module';
import { SharedModule } from './shared.module';
import { CategoriaModule } from './components/categoria/categoria.module';
import { ActividadModule } from './components/actividad/actividad.module';
import { ProyectoModule } from './components/proyecto/proyecto.module';
import { PostModule } from './components/usuario/editor/post/post.module';
import { PluginModule } from './components/usuario/editor/plugin/plugin.module';
import { EditorModule } from './components/txt-edit/editor.module';

@NgModule({
    declarations: [
        AppComponent,

        //
        AddUsuarioComponent,
        LoginComponent,
        ManagerHomepageComponent,

        ManagerUserRoutesComponent,

        //Recordatorio
        ListRecordatorioComponent,
        ManagerRecordatorioRoutesComponent,

        //usuario
        EditUsuarioComponent,
        ListUsuarioComponent,
        SolicitudEditorComponent,
        ListSolicitudesComponent,

        //Perfil
        ListPublicacionComponent,
        PerfilComponent,
        ComentarioComponent,
        ContactComponent,
        FindContactComponent,
        VisitanteComponent,
        PuntuacionComponent,

        //Calendar
        ReminderModalComponent,
        ActivityModalComponent,
        ModalCalendarioComponent,
        CalendarComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        NgxPopperjsModule,
        SharedModule,
        CategoriaModule,
        ActividadModule,
        ProyectoModule,
        PostModule,
        PluginModule,
        EditorModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
