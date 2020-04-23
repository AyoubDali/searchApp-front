import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Subscriber } from '../../interfaces/subscriber';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';
import { Operator } from '../../interfaces/operator';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  subscribers: Subscriber[];

  apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient,private router: Router
              ,private tokenStorageService: TokenStorageService) {

  }

  search(searchKey: string) {

    searchKey = encodeURI(searchKey);
    console.log(`${this.apiUrl}subscriber/search${searchKey}`);
    return this.http.get<Subscriber[]>(`${this.apiUrl}subscriber/search/${searchKey}`);

  }


 public getSubscriberList(): Subscriber[] {
    return this.subscribers;
  }

  public setSubscriberList(subscribersList: Subscriber[]) {
    this.subscribers = subscribersList;
  }


  signUp(fullName: string, email: string, password: string) {

    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };    let body = new HttpParams();
    

    this.http.post<any>(`${this.apiUrl}api/auth/signup`, {
      username: fullName,
      email: email,
      password: password,
      roles: "PRO" },  httpOptions ).subscribe(data => {
        console.log(data.message === "User registered successfully!");

    switch(data.message) { 
      case "User registered successfully!": { 
        console.log("navigate")
        this.router.navigate([`/sign-in`]);
         break; 
      }
      case "Error: Email is already in use!": { 
         alert("Email is already in use!")
         break; 
      } 
      case "Error: Username is already taken!": { 
        alert(" Username is already taken!")
        break; 
     } 
      default: { 
        console.log("success default");
        this.router.navigate([`/signIn`]);
        break; 
      }
    }
    },
    error =>{ 
      
      switch(error.error.message) { 
        case "Error: Email is already in use!": { 
           alert("Email is already in use!")
           break; 
        } 
        case "Error: Username is already taken!": { 
          alert(" Username is already taken!")
          break; 
       } 
        default: { 
          console.log(error.error.message);
          alert("password too weak !!")
          break; 
        }
      }
    }
    )

  }

  signIn(username: string, password: string) {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };    let body = new HttpParams();
    

    return this.http.post<any>(`${this.apiUrl}api/auth/signin`, {
      username: username,
      password: password },  httpOptions );
     }


     getOpertorList() {
      
        console.log(`${this.apiUrl}operator/all`);
        return this.http.get<Operator[]>(`${this.apiUrl}operator/all`,{});


    }

}
