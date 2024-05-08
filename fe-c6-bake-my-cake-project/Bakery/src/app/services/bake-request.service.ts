import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BakeRequest } from "../models/bake-request";

@Injectable({
    providedIn:'root'
})
export class BakeRequestService {
    
  URL: string ="http://localhost:3000/bakeRequests";

  constructor(private http:HttpClient) { }

  getAllBakeRequests() : Observable<Array<BakeRequest>> {
    return this.http.get<Array<BakeRequest>>(`${this.URL}`);
  }

  saveBakeRequest(bakeRequest? : BakeRequest) : Observable<BakeRequest> {
    return this.http.post<BakeRequest>(`${this.URL}`,bakeRequest)
  }
}