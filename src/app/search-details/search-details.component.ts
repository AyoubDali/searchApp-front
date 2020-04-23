import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from '../../interfaces/subscriber';
import { ListingResultComponent } from '../listing-result/listing-result.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})

  export class SearchDetailsComponent implements OnInit {
  sub: any;
  subscriberId: any;
  subscriber: Subscriber;
  SubscribersList: Subscriber[];
  latitude: any = 52.295407 ;
  longitude: any = 4.681376;
  mapType = 'roadmap';



  constructor( private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {

   this.sub = this.route.params.subscribe(params => {
          this.subscriberId = params.es_id;
    });

     this.subscriber = this.getSubscriberByEsId(this.subscriberId)
     console.log("data: "+  this.subscriber.addressSet[0].longitude);
    
     this.latitude= parseFloat(this.subscriber.addressSet[0].latitude);
     this.longitude= parseFloat(this.subscriber.addressSet[0].longitude);

  }
  

   getSubscriberByEsId(es_id: string){
     this.SubscribersList =  JSON.parse(localStorage.getItem("subscribersList"))
     return this.SubscribersList.find(x => x.es_id === this.subscriberId); 
   }

}
