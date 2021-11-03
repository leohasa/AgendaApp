import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    private url: string = 'http://localhost:3000/backend/post';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Post[]>(`${this.url}/list`);
    }

    getAllByUserAndPlugin(username: string, id: string) {
        return this.http.get<Post[]>(`${this.url}/listByUserAndPlugin/${id}/${username}`);
    }

    create(post: Post) {
        return this.http.post<Post>(`${this.url}/add`, post);
    }

    getById(id: string) {
        return this.http.get<Post>(`${this.url}/get/${id}`);
    }

    update(post: Post) {
        return this.http.put<Post>(`${this.url}/update`, post);
    }

    delete(id: string) {
        return this.http.delete<Post>(`${this.url}/delete/${id}`);
    }
}
