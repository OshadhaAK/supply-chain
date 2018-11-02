import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component'
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { RegisterComponent } from './Pages/register/register.component';
import { CustomerHomeComponent } from './Pages/customers/customer-home/customer-home.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'customer-home', component: CustomerHomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
