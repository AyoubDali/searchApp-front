import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Subscriber } from '../../interfaces/subscriber';
import {FormControl, FormsModule, ReactiveFormsModule,FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchKey = new FormControl('', []);

  constructor(public fb: FormBuilder, private router: Router) {

   }

  ngOnInit() {
  }

  search(){
    this.router.navigate([`/search`, this.searchKey.value]);
  }


}
