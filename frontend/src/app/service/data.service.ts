import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private data = new Subject<any>();

    getData(): Observable<any> {
        return this.data;
    }

    updateData(data: any): void {
        this.data.next(data);
    }
}
