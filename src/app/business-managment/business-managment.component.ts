import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscriber } from 'src/interfaces/subscriber';
import { Address } from 'src/interfaces/address';
import { LegalInformation } from 'src/interfaces/legal-information';
import { Operator } from 'src/interfaces/operator';
import { ProfessionType } from 'src/interfaces/profession-type';
import { OpeningTime } from 'src/interfaces/opening-time';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-business-managment',
  templateUrl: './business-managment.component.html',
  styleUrls: ['./business-managment.component.css']
})
export class BusinessManagmentComponent implements OnInit {

  /*title = 'materialApp';   
   firstFormGroup: FormGroup;
   secondFormGroup: FormGroup;*/

   subscriber: Subscriber;
   address: Address;
   legalInformation: LegalInformation;
   operator: Operator;
   professionType: ProfessionType;
   openingTime: OpeningTime;



  // General information //
   companyName = new FormControl('', [Validators.required]);
   password = new FormControl('', [Validators.required]);
   phoneNumber = new FormControl('', [Validators.required]);
   phoneOperator = new FormControl('', [Validators.required]);
   email = new FormControl('', [Validators.required]);  
   webSiteUrl = new FormControl('', [Validators.required]);
   profession_type = new FormControl('', [Validators.required]);
   // Legal information //
   siren = new FormControl('', [Validators.required]);
   nic = new FormControl('', [Validators.required]);
   siret = new FormControl('', [Validators.required]);
   ape = new FormControl('', [Validators.required]);
   tva = new FormControl('', [Validators.required]);
   description = new FormControl('', [Validators.required]);
     // Address information //
   city = new FormControl('', [Validators.required]);
   street = new FormControl('', [Validators.required]);
   zipCode = new FormControl('', [Validators.required]);
   latitude = new FormControl('', [Validators.required]);
   longitude = new FormControl('', [Validators.required]);
     // Opening Time //
   mondayOpening = new FormControl('', [Validators.required]);
   mondayClosing = new FormControl('', [Validators.required]);
   tuesdayOpening = new FormControl('', [Validators.required]);
   tuesdayClosing = new FormControl('', [Validators.required]);
   wednesdayOpening = new FormControl('', [Validators.required]);
   wednesdayClosing = new FormControl('', [Validators.required]);
   thursdayOpening = new FormControl('', [Validators.required]);
   thursdayClosing = new FormControl('', [Validators.required]);
   fridayOpening = new FormControl('', [Validators.required]);
   fridayClosing = new FormControl('', [Validators.required]);
   saturdayOpening = new FormControl('', [Validators.required]);
   saturdayClosing = new FormControl('', [Validators.required]);
   sundayOpening = new FormControl('', [Validators.required]);
   sundayClosing = new FormControl('', [Validators.required]);

   operatorList: Operator[];

  constructor( private tokenStorageService:TokenStorageService, private router: Router,
    private _formBuilder: FormBuilder, private dataService: DataService) { }

  


  
  ngOnInit() {

    if(!this.tokenStorageService.getToken())
        this.router.navigate([`/`]);
    
        this.dataService.getOpertorList().subscribe(data => {
           this.operatorList = data
        });
  }

  saveSubscriber(){
    this.subscriber.name = this.companyName.value;
    this.subscriber.email = this.email.value;
    this.subscriber.phoneNumber = this.phoneNumber.value;
    this.subscriber.websiteUrl = this.webSiteUrl.value;

    alert(this.sundayClosing.value);
  }

}
