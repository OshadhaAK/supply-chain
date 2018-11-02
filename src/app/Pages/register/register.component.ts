import { Component, OnInit } from '@angular/core';
import { RequestsServiceService} from '../../services/requests-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName: String;
  middleName: String;
  lastName: String;
  //accountType: String;
  address: String;
  mobileNo: String;
  username: String;
  email: String;
  password: String;

  constructor(private reqService:RequestsServiceService,
              private messages:FlashMessagesService
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      //accountType: this.accountType,
      address: this.address,
      email: this.email,
      mobileNo: this.mobileNo,
      username: this.username,
      password: this.password,
    };

    this.reqService.registerUser(user).subscribe(data => {
      console.log('Trying to register');
      if (data.success) {
        this.messages.show(data.msg, {
          cssClass: 'alert-success',
          timeOut: 5000 });

      } else {
        this.messages.show(data.msg, {
          cssClass: 'alert-danger',
          timeOut: 5000 });
      }
    });

  }

}
