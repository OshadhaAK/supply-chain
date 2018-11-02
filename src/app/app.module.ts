import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavBarComponent } from './UI/nav-bar/nav-bar.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { RegisterComponent } from './Pages/register/register.component';

import { FormsModule } from '@angular/forms';
import { CustomerHomeComponent } from './Pages/customers/customer-home/customer-home.component'; // <-- NgModel lives here

//http
import {HttpClientModule} from '@angular/common/http';

//services
import{ RequestsServiceService} from '../app/services/requests-service.service';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SignInComponent,
    RegisterComponent,
    CustomerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [RequestsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
