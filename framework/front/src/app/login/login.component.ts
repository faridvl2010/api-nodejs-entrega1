import { Component, OnInit } from '@angular/core';
import { UserServices } from '../services/user-services.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserServices) { }

  ngOnInit(): void {
  }

  sendData(values: any) {
        // this.userService.getUser(
        //   values.Email,
        //   values.PasswordOne,
        // )
        console.log(values.Email)
        console.log(values.pass)
  }

}
