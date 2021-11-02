import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private data = new Subject();

    getData(): Observable<any> {
        return this.data;
    }

    updateData(data: boolean): void {
        this.data.next(data);
    }
}
