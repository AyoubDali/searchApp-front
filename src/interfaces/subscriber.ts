import { LegalInformation } from './legal-information';
import { ProfessionType } from './profession-type';
import { Operator } from './operator';
import { Address } from './address';
import { OpeningTime } from './opening-time';

export interface Subscriber {


    id: string;
    es_id: string;
    name: string;
    phoneNumber: string;
    phoneNumber2: string;
    phoneNumber3: string;
    email: string;
    websiteUrl: string;
    legalInformation: LegalInformation
    professionType: ProfessionType
    operator: Operator
    addressSet: Address[]
    openingTimeSet: OpeningTime[]
}
