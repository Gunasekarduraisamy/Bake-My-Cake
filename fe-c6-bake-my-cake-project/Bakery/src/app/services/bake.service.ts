import { HttpClient } from "@angular/common/http";
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs'
import { Bake } from "../models/bake";

@Injectable({
    providedIn:'root'
})
export class BakeService {
    URL: string ="http://localhost:3000/bakes";
    constructor(private http: HttpClient) {}

    getAllBakes(): Observable<Array<Bake>> {
        return this.http.get<Array<Bake>>(this.URL)
    }

    getBake(id?: string) : Observable<Bake>{
        console.log(id);
        return this.http.get<Bake>(`${this.URL}/${id}`);
    }
}