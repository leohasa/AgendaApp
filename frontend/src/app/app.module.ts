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
import { CalendarioMesComponent } from './calendario/calendario-mes/calendario-mes.component';
import { CalendarioDiaComponent } from './calendario/calendario-dia/calendario-dia.component';
import { ModalComponent } from './modal/modal.component';
import { TxtEditComponent } from './txt-edit/txt-edit.component';
import { NgxEditorModule } from 'ngx-editor';

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
        CalendarioMesComponent,
        CalendarioDiaComponent,
        ModalComponent,
        TxtEditComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgxEditorModule
    ],
    providers:
    [
        UsuarioService,
        CategoriaService,
        ProyectoService,
        ActividadService,
        AccessGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
