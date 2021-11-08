import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
    selector: 'app-edit-post',
    templateUrl: './edit-post.component.html',
    styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

    post: Post;
    isEditor: boolean;
    textInfo: string = "";

    constructor(private router: Router, private postService: PostService) {
        this.post = new Post();
        this.isEditor = true;
    }

    ngOnInit(): void {
        this.eventModal();
        this.getPost();
    }

    getPost() {
        let idPost: string = localStorage.getItem('idPost') ?? '';
        this.postService.getById(idPost)
            .subscribe(data => {
                this.post = data;
            });
    }

    addPost(post: Post) {
        this.postService.create(post)
            .subscribe(data => {
                this.showInfo('Post editado con exito');
            });
    }

    private eventModal() {
        document.getElementById('modalInfo')?.addEventListener('hidden.bs.modal', () => {
            this.backList();
        });
    }

    backList() {
        this.router.navigate(['/post/list']);
    }

    private showInfo(info: string) {
        this.textInfo = info;
        document.getElementById("btnModalInfo")?.click();
    }

}
