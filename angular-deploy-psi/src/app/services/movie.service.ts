import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiURL: string ='http://localhost:8000/api/';

    constructor( public http:HttpClient ) {}

    showMovie():Observable<any> {
        return this.http.get(this.apiURL + 'tag');
    }
}
