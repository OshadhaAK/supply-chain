import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class RequestsServiceService {
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<RegularResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // route should be "users/register"
    return this.http.post('users/register', user, {headers: headers}) as Observable<RegularResponse>;
  }

  // authenticate
  authenticateUser(user): Observable<AuthenticateResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // console.log('auth service:' + headers.get('Content-Type'));
    return this.http.post('users/authenticate', user, {headers: headers}) as Observable<AuthenticateResponse>;
  }

  //order
  orderRequest(order):Observable<RegularResponse>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('order', order, {headers: headers}) as Observable<RegularResponse>;
  }




}



interface RegularResponse {
  success: boolean;
  msg: string;
}

interface AuthenticateResponse {
  success: boolean;
  token: string;
  user: any;
  msg: string;
}

