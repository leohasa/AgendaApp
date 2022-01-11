import { NgModule } from '@angular/core';
import { ListPostComponent } from './list-post/list-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { VistaPostComponent } from '../vista-post/vista-post.component';
import { SharedModule } from 'src/app/shared.module';
import { EditorModule } from 'src/app/components/txt-edit/editor.module';
import { AllPostsPluginComponent } from '../../all-posts-plugin/all-posts-plugin.component';



@NgModule({
    declarations: [
        ListPostComponent,
        AddPostComponent,
        EditPostComponent,
        VistaPostComponent,
        AllPostsPluginComponent
    ],
    imports: [
        SharedModule,
        EditorModule
    ]
})
export class PostModule { }
