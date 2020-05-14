import { LegalInformationModel } from './LegalInformationModel';

import { ProfessionTypeModel } from './ProfessionTypeModel';

import { OperatorModel } from './OperatorModel';

import { OpeningTimeModel } from './OpeningTimeModel';
import { AddressModel } from './AddressModel';

export class Subscriber {
  
    id: string;
    es_id: string;
    name: string;
    phoneNumber: string;
    phoneNumber2: string;
    phoneNumber3: string;
    email: string;
    websiteUrl: string;
    legalInformation: LegalInformationModel;
    professionType: ProfessionTypeModel;
    operator: OperatorModel;
    addressSet: AddressModel[];
    openingTimeSet: OpeningTimeModel[];

    constructor(){}

  public set_name(name: string){
         this.name= name;
    }
    public set_phoneNumber(phoneNumber: string){
        this.phoneNumber= phoneNumber;
   }
   public set_email(email: string){
    this.email= email;
}
   public set_websiteUrl(websiteUrl: string){
     this.name= websiteUrl;
}
public set_address(address: AddressModel[]){
  this.addressSet= address;
}
 
public set_professionType(professionType: ProfessionTypeModel){
  this.professionType = professionType;
}

public set_openingTimeSet(openingTimeSet: OpeningTimeModel[]){
  this.openingTimeSet = openingTimeSet;
}

public set_operator(operator: OperatorModel){
  this.operator = operator;
}

public set_legalInformation(legalInformation: LegalInformationModel){
  this.legalInformation = legalInformation;
}
}