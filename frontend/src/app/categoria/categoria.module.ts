import { NgModule } from '@angular/core';
import { AddCategoriaComponent } from './add-categoria/add-categoria.component';
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';
import { ListCategoriaComponent } from './list-categoria/list-categoria.component';
import { SharedModule } from '../shared.module';
import { ManagerCategoryRoutesComponent } from './manager-category-routes/manager-category-routes.component';



@NgModule({
    declarations: [
        AddCategoriaComponent,
        EditCategoriaComponent,
        ListCategoriaComponent,
        ManagerCategoryRoutesComponent
    ],
    imports: [
        SharedModule
    ]
})
export class CategoriaModule { }
