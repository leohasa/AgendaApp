import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { DataPostService } from 'src/app/service/data-post.service';
import { PostService } from 'src/app/service/post.service';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

    textInfo: string = "";

    constructor(private router: Router, private service: PostService, private dataPost: DataPostService) { }

    ngOnInit(): void {
        this.eventModal();
        this.suscribePost();
    }

    suscribePost() {
        this.dataPost.getData()
            .subscribe(data => {
                this.service.create(data)
                    .subscribe(data => {
                        this.showInfo('Post agregado con al plugin');
                    });
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
