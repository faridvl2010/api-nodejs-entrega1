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
        // this.userService.logUser(
        //   values.Email,
        //   values.PasswordOne,
        // )
        try {
          console.log(values.Email)
          console.log(values.pass)
          if (values.Email == "" || values.pass == "") {
            alert('Faltan campos por llenar')
          }
        } catch (error) {
          
        }
        
  }

}
