import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, NgForm} from '@angular/forms';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  fullName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  profileType = new FormControl('', [Validators.required]);
  

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  signUp(form: NgForm){
    
    this.dataService.signUp(this.fullName.value, this.email.value, this.password.value);

  }

}
