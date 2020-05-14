export class AddressModel {

    city: string;
    street: string;
    zipCode: string;
    latitude: string;
    longitude: string;
  

    constructor(){}

  public set_city(city: string){
         this.city= city;
    }
    
    public set_street(street: string){
        this.street= street;
   }  
   public set_latitude(latitude: string){
    this.latitude= latitude;
}  

public set_longitude(longitude: string){
    this.longitude= longitude;
} 

}