import { ProfessionType } from 'src/interfaces/profession-type';
import { Subscriber } from 'src/interfaces/subscriber';

export class User {
  
    id: string;
    es_id: string;
    username: string;
    email: string;
    professionType: ProfessionType;
    subscriber: Subscriber;
}