import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingResultComponent } from './listing-result/listing-result.component';
import { SearchDetailsComponent } from './search-details/search-details.component';


const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'search/:searchKey', component: ListingResultComponent},
  {path : 'subscriber/:es_id', component: SearchDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
