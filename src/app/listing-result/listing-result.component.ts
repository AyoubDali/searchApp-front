import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import {ActivatedRoute} from '@angular/router';
import { Subscriber } from '../model/Subscriber';

@Component({
  selector: 'app-listing-result',
  templateUrl: './listing-result.component.html',
  styleUrls: ['./listing-result.component.css']
})
export class ListingResultComponent implements OnInit {

  subscribers: Subscriber[];
  sub: any;
  searchKey: string;


  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      console.log("search key: "+ params.searchKey);
      this.searchKey = params.searchKey;
    });

    this.dataService.search(this.searchKey).subscribe(data => {
      this.subscribers = data ;

      localStorage.setItem("subscribersList", JSON.stringify(this.subscribers));

    });

  }




}
