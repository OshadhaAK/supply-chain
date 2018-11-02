import { Component, OnInit } from '@angular/core';
import { RequestsServiceService} from '../../services/requests-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username: string;
  password: string;

  constructor(private reqService:RequestsServiceService,
    private messages:FlashMessagesService) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    console.log("submitted");
    const user={
      username:this.username,
      password:this.password
    };
    this.reqService.registerUser(user).subscribe(data => {
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
