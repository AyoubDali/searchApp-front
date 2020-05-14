import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingResultComponent } from './listing-result/listing-result.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BusinessManagmentComponent } from './business-managment/business-managment.component';
import { EditSubscriberComponent } from './edit-subscriber/edit-subscriber.component';


const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'search/:searchKey', component: ListingResultComponent},
  {path : 'subscriber/:es_id', component: SearchDetailsComponent},
  {path : 'sign-up', component: SignUpComponent},
  {path : 'sign-in', component: SignInComponent},
  {path : 'businessManagment', component: BusinessManagmentComponent},
  {path : 'editSubscriber', component: EditSubscriberComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
