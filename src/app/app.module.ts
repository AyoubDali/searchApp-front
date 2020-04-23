import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingResultComponent } from './listing-result/listing-result.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './service/data.service';
import { AgmCoreModule } from '@agm/core';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BusinessManagmentComponent } from './business-managment/business-managment.component';

import {MatStepperModule, MatInputModule, MatButtonModule} from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { authInterceptorProviders } from './service/AuthInterceptor';



@NgModule({
  declarations: [
    AppComponent,
    ListingResultComponent,
    SearchDetailsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent,
    BusinessManagmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule, MatInputModule, MatButtonModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA0C5etf1GVmL_ldVAichWwFFVcDfa1y_c'
    })

      ],
  providers: [DataService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
