import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
    selector: 'app-all-posts-plugin',
    templateUrl: './all-posts-plugin.component.html',
    styleUrls: ['./all-posts-plugin.component.css']
})
export class AllPostsPluginComponent implements OnInit {

    posts: Post[];

    constructor(private router: Router, private service: PostService) {
        this.posts = new Array();
    }

    ngOnInit(): void {
        let idP = localStorage.getItem('idPlugin') ?? '';
        this.service.getAllByPlugin(idP)
            .subscribe(data => {
                this.posts = data;
            });
    }

    verPost(post: Post) {
        localStorage.setItem('idPost', post.id.toString());
        this.router.navigate(['/user/viewPost']);
    }

    back() {
        this.router.navigate(['/user/misPlugins']);
    }

}
