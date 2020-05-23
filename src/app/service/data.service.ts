import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';
import { Operator } from '../../interfaces/operator';
import { ProfessionType } from 'src/interfaces/profession-type';
import { Subscriber } from '../model/Subscriber';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  subscribers: Subscriber[];


// for production  
 subscriberServiceUrl = '/'; 
 searchServiceUrl = '/';
 
 // for development
//subscriberServiceUrl = 'http://localhost:8090/';
// searchServiceUrl = 'http://localhost:8070/';

 // for kubernetes
// subscriberServiceUrl = 'http://localhost:8090/';
// searchServiceUrl = 'http://searchservice:8070/';

 
 constructor(private http: HttpClient,private router: Router
              ,private tokenStorageService: TokenStorageService) {

  }

  search(searchKey: string) {

    searchKey = encodeURI(searchKey);
    console.log(`${this.searchServiceUrl}subscriber/search${searchKey}`);
    return this.http.get<Subscriber[]>(`${this.searchServiceUrl}subscriber/search/${searchKey}`);

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


    this.http.post<any>(`${this.subscriberServiceUrl}api/auth/signup`, {
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


    return this.http.post<any>(`${this.subscriberServiceUrl}api/auth/signin`, {
      username: username,
      password: password },  httpOptions );
     }


     getOpertorList() {

       // console.log(`${this.apiUrl}operator/all`);
        return this.http.get<Operator[]>(`${this.subscriberServiceUrl}api/operator/all`,{});
    }

    getProfessionType() {
      return this.http.get<ProfessionType[]>(`${this.subscriberServiceUrl}api/professionType/all`,{});
    }

    saveProfessionalInformation(subscriber: Subscriber) {

    //  alert("user here");
      console.log("user here");

      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      const subscriberJson = JSON.stringify(subscriber);
      const user = this.tokenStorageService.getUser();

      console.log("user here"+user);
       return this.http.post<any>(`${this.subscriberServiceUrl}api/subscriber/add`, {
       subscriber,
      user} ,httpOptions);
   
    }

    isSubscribed() {
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      const user = this.tokenStorageService.getUser();
      console.log("is subscribed"+ user);
      return this.http.get<Subscriber>(`${this.subscriberServiceUrl}api/user/isSubscribed/${user}`,
      httpOptions );
    }

    editProfessionalInformation(subscriber: Subscriber) {
     

      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      const subscriberJson = JSON.stringify(subscriber);
      const user = this.tokenStorageService.getUser();
      return this.http.post<any>(`${this.subscriberServiceUrl}api/subscriber/edit`, {
        subscriber,
        user} ,httpOptions);
    }


    deleteProfessionalInformation(subscriberId: String) {

      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
     
      // const subscriberJson = JSON.stringify(subscriber);
      //const user = this.tokenStorageService.getUser();
      return this.http.delete<any>(`${this.subscriberServiceUrl}api/subscriber/delete/`+subscriberId ,httpOptions);
    
    }
}
    


