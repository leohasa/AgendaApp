import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
    selector: 'app-vista-post',
    templateUrl: './vista-post.component.html',
    styleUrls: ['./vista-post.component.css']
})
export class VistaPostComponent implements OnInit {

    post: Post;

    constructor(private router: Router, private postService: PostService) {
        this.post = new Post();
    }

    ngOnInit(): void {
        this.getPost();
    }

    getPost() {
        let idPost: string = localStorage.getItem('idPost') ?? '';
        this.postService.getById(idPost)
            .subscribe(data => {
                this.post = data;
            });
    }

    backList() {
        this.router.navigate(['/post/list']);
    }


}
