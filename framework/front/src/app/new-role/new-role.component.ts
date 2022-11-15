import { Component, OnInit } from '@angular/core';
import { RolesService } from '../services/roles.service'

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.css']
})
export class NewRoleComponent implements OnInit {

  constructor(public rolesService: RolesService) { }

  ngOnInit(): void {

  }

  createRol(values: any){

    return this.rolesService.registerRol(
      values.names,
      values.desc,
    )
  }

  discardRol(){

  }

}
