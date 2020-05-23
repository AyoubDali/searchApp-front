import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Address } from 'src/interfaces/address';
import { LegalInformation } from 'src/interfaces/legal-information';
import { Operator } from 'src/interfaces/operator';
import { ProfessionType } from 'src/interfaces/profession-type';
import { OpeningTime } from 'src/interfaces/opening-time';
import { DataService } from '../service/data.service';
import { Subscriber } from '../model/Subscriber';
import { AddressModel } from '../model/AddressModel';
import { OpeningTimeModel } from '../model/OpeningTimeModel';
import { ProfessionTypeModel } from '../model/ProfessionTypeModel';
import { LegalInformationModel } from '../model/LegalInformationModel';
import { OperatorModel } from '../model/OperatorModel';

@Component({
  selector: 'app-business-managment',
  templateUrl: './business-managment.component.html',
  styleUrls: ['./business-managment.component.css']
})
export class BusinessManagmentComponent implements OnInit {

  /*title = 'materialApp';
   firstFormGroup: FormGroup;
   secondFormGroup: FormGroup;*/





  // General information //
   name = new FormControl('', [Validators.required]);
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
   professionTypeList: ProfessionType[];
  // openingTimeList: OpeningTimeModel[];
   openingTimeList:OpeningTimeModel[];

   subscriber: Subscriber;
   address: AddressModel;
   professionType: ProfessionTypeModel;
   openingTime: OpeningTimeModel;
   operator: OperatorModel; 
   legalInformation: LegalInformationModel;


  constructor( private tokenStorageService:TokenStorageService, private router: Router,
    private _formBuilder: FormBuilder, private dataService: DataService) { }




  ngOnInit() {

    //alert("here");
    this.dataService.isSubscribed().subscribe(data => {
      console.log("is subscribed returned value"+data);

      if(data != null){
        window.sessionStorage.setItem("subscriber", JSON.stringify(data));
        this.router.navigate([`/editSubscriber`]);
      } 
    })

    if(!this.tokenStorageService.getToken())
        this.router.navigate([`/`]);

        this.dataService.getOpertorList().subscribe(data => {
           this.operatorList = data
        });
        this.dataService.getProfessionType().subscribe(data => {
          this.professionTypeList = data
       });
  }

  saveSubscriber(){
    var addressList = new Array();

    this.subscriber = new Subscriber();
    this.address = new AddressModel();
    this.address.set_city(this.city.value);
    this.address.set_street(this.street.value);
    this.address.zipCode= this.zipCode.value;
    this.address.set_latitude(this.latitude.value);
    this.address.set_longitude(this.longitude.value);
    addressList.push(this.address);

    this.professionType = new ProfessionTypeModel();
    this.professionType.type = this.profession_type.value;

    this.operator = new OperatorModel();
    this.operator.name = this.phoneOperator.value;

    this.legalInformation = new LegalInformationModel();
    this.legalInformation.ape = this.ape.value;
    this.legalInformation.siren = this.siren.value;
    this.legalInformation.siret = this.siret.value;
    this.legalInformation.tva = this.tva.value;
    this.legalInformation.description = this.description.value;
    this.legalInformation.companyName = this.name.value;
    this.legalInformation.nic = this.nic.value;

    this.saveOpeningDate();
    this.subscriber.set_name(this.name.value);
    this.subscriber.phoneNumber = this.phoneNumber.value;
    this.subscriber.set_address(addressList);
    this.subscriber.set_openingTimeSet(this.openingTimeList);    
    this.subscriber.set_professionType(this.professionType);
    this.subscriber.set_operator(this.operator);
    this.subscriber.set_legalInformation(this.legalInformation);
    this.subscriber.email = this.email.value;
    this.subscriber.websiteUrl = this.webSiteUrl.value;

    this.dataService.saveProfessionalInformation(this.subscriber).subscribe(data =>{
      alert("your information are successfully stored");
    });

  }
  saveOpeningDate() {
   
    this.openingTime = new OpeningTimeModel();
    this.openingTimeList= new Array<OpeningTimeModel>()
    this.openingTime.day= "Monday";
    this.openingTime.opening= this.mondayOpening.value;
    this.openingTime.closing= this.mondayClosing.value;
    this.openingTimeList.push( this.openingTime);
    this.openingTime = new OpeningTimeModel();
    this.openingTime.day= "Tuesday";
    this.openingTime.opening= this.tuesdayOpening.value;
    this.openingTime.closing= this.tuesdayClosing.value;
    this.openingTimeList.push( this.openingTime);
    this.openingTime = new OpeningTimeModel();

    this.openingTime.day= "Wednesday";
    this.openingTime.opening= this.wednesdayOpening.value;
    this.openingTime.closing= this.wednesdayClosing.value;
    this.openingTimeList.push( this.openingTime);
    this.openingTime = new OpeningTimeModel();

    this.openingTime.day= "Thursday";
    this.openingTime.opening= this.thursdayOpening.value;
    this.openingTime.closing= this.thursdayClosing.value;
    this.openingTimeList.push( this.openingTime);
    this.openingTime = new OpeningTimeModel();

    this.openingTime.day= "Friday";
    this.openingTime.opening= this.fridayOpening.value;
    this.openingTime.closing= this.fridayClosing.value;
    this.openingTimeList.push( this.openingTime);
    this.openingTime = new OpeningTimeModel();

    this.openingTime.day= "Saturday";
    this.openingTime.opening= this.saturdayOpening.value;
    this.openingTime.closing= this.saturdayClosing.value;
    this.openingTimeList.push( this.openingTime);
    this.openingTime = new OpeningTimeModel();

    this.openingTime.day= "Sunday";
    this.openingTime.opening= this.sundayOpening.value;
    this.openingTime.closing= this.sundayClosing.value;
    this.openingTimeList.push( this.openingTime);

    
  }

}
