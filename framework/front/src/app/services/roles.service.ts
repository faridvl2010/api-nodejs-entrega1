import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RolCreater, Rol } from '../models/Rol';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  URL_API = 'https://ms-ussers.herokuapp.com/api/rol'
  roles : Rol[] = [];

  constructor(private http: HttpClient) { }

  registerRol(NAME: string, DESCRIPTION: string) {
    //parametros de todo lo que se tiene que enviar
    let registerData: RolCreater = {
      NAME,
      DESCRIPTION,
      STATE: "a"
    }
    
    this.http.post(this.URL_API, registerData).
    subscribe(res => {
      alert(res)
    })
  }

}
