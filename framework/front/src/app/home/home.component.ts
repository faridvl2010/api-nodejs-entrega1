import { Component, OnInit } from '@angular/core';

import { UserServices } from '../services/user-services.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserServices){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      res => console.log(res)
    )
  }
  // constructor() { }

  // ngOnInit(): void {
  // }

}
