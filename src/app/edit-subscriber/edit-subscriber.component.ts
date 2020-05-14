import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from '../model/Subscriber';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AddressModel } from '../model/AddressModel';
import { ProfessionTypeModel } from '../model/ProfessionTypeModel';
import { OpeningTimeModel } from '../model/OpeningTimeModel';
import { OperatorModel } from '../model/OperatorModel';
import { LegalInformationModel } from '../model/LegalInformationModel';
import { ProfessionType } from 'src/interfaces/profession-type';
import { Operator } from 'src/interfaces/operator';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-edit-subscriber',
  templateUrl: './edit-subscriber.component.html',
  styleUrls: ['./edit-subscriber.component.css']
})
export class EditSubscriberComponent implements OnInit {
  sub: any;
  subscriberInfo: Subscriber;
  subscriber: Subscriber;


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

   address: AddressModel;
   professionType: ProfessionTypeModel;
   openingTime: OpeningTimeModel;
   operator: OperatorModel; 
   legalInformation: LegalInformationModel;


  constructor(private route: ActivatedRoute, private _formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.subscriberInfo = JSON.parse( sessionStorage.getItem("subscriber") ); 

     // window.sessionStorage.removeItem("subscriber");
      this.name.setValue(this.subscriberInfo.name);
      this.email.setValue(this.subscriberInfo.email);
      this.phoneNumber.setValue(this.subscriberInfo.phoneNumber);
      this.webSiteUrl.setValue(this.subscriberInfo.websiteUrl);
      this.profession_type.setValue(this.subscriberInfo.professionType.type);
      this.siren.setValue(this.subscriberInfo.legalInformation.siren);
      this.siret.setValue(this.subscriberInfo.legalInformation.siret);
      this.nic.setValue(this.subscriberInfo.legalInformation.nic);
      this.ape.setValue(this.subscriberInfo.legalInformation.ape);
      this.tva.setValue(this.subscriberInfo.legalInformation.tva);
      this.description.setValue(this.subscriberInfo.legalInformation.description);
      this.city.setValue(this.subscriberInfo.addressSet[0].city);
      this.street.setValue(this.subscriberInfo.addressSet[0].street);
      this.zipCode.setValue(this.subscriberInfo.addressSet[0].zipCode);
      this.latitude.setValue(this.subscriberInfo.addressSet[0].latitude);
      this.longitude.setValue(this.subscriberInfo.addressSet[0].longitude);
      this.mondayOpening.setValue(this.subscriberInfo.openingTimeSet[0].opening);
      this.mondayClosing.setValue(this.subscriberInfo.openingTimeSet[0].closing);
      this.tuesdayClosing.setValue(this.subscriberInfo.openingTimeSet[1].opening);
      this.tuesdayClosing.setValue(this.subscriberInfo.openingTimeSet[1].closing);
      this.wednesdayOpening.setValue(this.subscriberInfo.openingTimeSet[2].opening);
      this.wednesdayClosing.setValue(this.subscriberInfo.openingTimeSet[2].closing);
      this.thursdayOpening.setValue(this.subscriberInfo.openingTimeSet[3].opening);
      this.thursdayClosing.setValue(this.subscriberInfo.openingTimeSet[3].closing);
      this.fridayOpening.setValue(this.subscriberInfo.openingTimeSet[4].opening);
      this.fridayClosing.setValue(this.subscriberInfo.openingTimeSet[4].closing);
      this.saturdayOpening.setValue(this.subscriberInfo.openingTimeSet[5].opening);
      this.saturdayClosing.setValue(this.subscriberInfo.openingTimeSet[5].closing);
      this.sundayOpening.setValue(this.subscriberInfo.openingTimeSet[6].opening);
      this.sundayClosing.setValue(this.subscriberInfo.openingTimeSet[6].closing);
    });
  }

  editSubscriber(){

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
    this.subscriber.id = this.subscriberInfo.id;
    this.dataService.editProfessionalInformation(this.subscriber).subscribe(data =>{
      alert("your information are successfully edited");
      window.sessionStorage.setItem("subscriber", JSON.stringify(data));

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

  deleteSubscriber(){

    this.subscriberInfo = JSON.parse( sessionStorage.getItem("subscriber") ); 
    this.dataService.deleteProfessionalInformation(this.subscriberInfo.id).subscribe(data =>{
      alert("your information are successfully deleted");
      window.sessionStorage.removeItem("subscriber");
      

    });
  }

  }


