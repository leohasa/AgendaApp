import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
    providedIn: 'root'
})
export class DataPostService {

    private data = new Subject<Post>();

    getData(): Observable<Post> {
        return this.data;
    }

    updateData(data: Post): void {
        this.data.next(data);
    }
}
