import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddActividadComponent } from './actividad/add-actividad/add-actividad.component';
import { EditActividadComponent } from './actividad/edit-actividad/edit-actividad.component';
import { ListActividadComponent } from './actividad/list-actividad/list-actividad.component';
import { AddCategoriaComponent } from './categoria/add-categoria/add-categoria.component';
import { EditCategoriaComponent } from './categoria/edit-categoria/edit-categoria.component';
import { ListCategoriaComponent } from './categoria/list-categoria/list-categoria.component';
import { AddProyectoComponent } from './proyecto/add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from './proyecto/edit-proyecto/edit-proyecto.component';
import { ListProyectoComponent } from './proyecto/list-proyecto/list-proyecto.component';
import { AddUsuarioComponent } from './usuario/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './usuario/edit-usuario/edit-usuario.component';
import { ListUsuarioComponent } from './usuario/list-usuario/list-usuario.component';

const routes: Routes = [
    {path: 'addUser', component: AddUsuarioComponent},
    {path: 'editUser', component: EditUsuarioComponent},
    {path: 'listUser', component: ListUsuarioComponent},
    {path: 'addCategoria', component: AddCategoriaComponent},
    {path: 'editCategoria', component: EditCategoriaComponent},
    {path: 'listCategoria', component: ListCategoriaComponent},
    {path: 'addProyecto', component: AddProyectoComponent},
    {path: 'editProyecto', component: EditProyectoComponent},
    {path: 'listProyecto', component: ListProyectoComponent},
    {path: 'addActividad', component: AddActividadComponent},
    {path: 'editActividad', component: EditActividadComponent},
    {path: 'listActividad', component: ListActividadComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
