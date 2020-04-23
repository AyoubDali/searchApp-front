import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  
  constructor(private dataService: DataService ,private tokenStorageService: TokenStorageService
    ,private router: Router) { }

  ngOnInit() {
  }

  signIn(){
    this.dataService.signIn( this.username.value, this.password.value).subscribe(data => {

      this.tokenStorageService.saveToken(data.token);
      this.tokenStorageService.saveUser(data.username);
      this.tokenStorageService.saveRole(data.roles);

      this.router.navigate([`/`]) .then(() => {

        window.location.reload();
      });
    },
    error =>{ 
        alert("rong username or password");

    });


  }

}
