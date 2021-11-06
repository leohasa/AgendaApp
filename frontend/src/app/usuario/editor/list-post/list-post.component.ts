import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
    selector: 'app-list-post',
    templateUrl: './list-post.component.html',
    styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

    posts: Post[];
    textInfo:string = "";

    constructor(private router: Router, private service: PostService) {
        this.posts = new Array();
    }

    ngOnInit(): void {
        let idP = localStorage.getItem('idPlugin') ?? '';
        let username = localStorage.getItem('user') ?? '';
        this.service.getAllByUserAndPlugin(username, idP)
            .subscribe(data => {
                this.posts = data;
            });
    }

    add() {
        this.router.navigate(['/post/add']);
    }

    editar(post: Post) {
        localStorage.setItem('idPost', post.id.toString());
        this.router.navigate(['/post/edit']);
    }

    delete(post: Post) {
        this.service.delete(post.id)
        .subscribe(data => {
            this.posts = this.posts.filter(a => a != post);
            this.showInfo('Post eliminado');
        });
    }

    private showInfo(info:string){
        this.textInfo = info;
        document.getElementById("btnModalInfo")?.click();
    }

    back() {
        this.router.navigate(['/plugin/list']);
    }

}
