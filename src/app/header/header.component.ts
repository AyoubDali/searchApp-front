import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: any =  false ;
  loggedOut: any = true ;
  role: any;
  constructor(private tokenStorageService:TokenStorageService,private router: Router) { }

  ngOnInit() {
      const token = this.tokenStorageService.getToken();
      if(token){
        this.isLoggedIn = true
        this.loggedOut = false
      
      }
       console.log("token "+token);
       console.log("loggout "+this.loggedOut);
       this.role =  this.tokenStorageService.getRole();
  }

  signOut(){
    console.log("logout");
    this.tokenStorageService.signOut();
    console.log(this.tokenStorageService.getToken());
    location.reload();

  }
}
