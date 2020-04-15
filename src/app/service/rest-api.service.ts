import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subscriber } from '../../interfaces/subscriber';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl = 'http://localhost:8080/';

 
  constructor(private http: HttpClient) { }

  search(searchKey: string){

    searchKey = encodeURI(searchKey);
    console.log(`${this.apiUrl}subscriber/search${searchKey}`);
    return this.http.get<Subscriber[]>(`${this.apiUrl}subscriber/search/${searchKey}`);
    
  }

}
