import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario, SendUsuario, GetUsuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UserServices {
  URL_API = 'http://localhost:3000/api/'
  
  users : Usuario[] = [];
  constructor(private http: HttpClient) { }

  // users = Usuario[]

  getUsers(index: String) {
    return this.http.get<Usuario[]>(this.URL_API+"page/"+index);
  }

  registerUser(NAME: string, LAST_NAME: string, EMAIL: string, TYPE_DOCUMENT: string, DOCUMENT: string, PASSWORD: string) {
    //parametros de todo lo que se tiene que enviar
    let registerData: SendUsuario = {
      NAME,
      LAST_NAME,
      EMAIL,
      TYPE_DOCUMENT,
      DOCUMENT,
      STATE: "a",
      PASSWORD
    }


    this.http.post(this.URL_API, registerData).
      subscribe(res => {
        alert(res)
      })
  }

  // pendiente conexion con login
  // logUser(EMAIL: string, PASSWORD: string) {
  //   let getUsr: GetUsuario = {
  //     EMAIL,
  //     PASSWORD
  //   }

  //   this.http.get(this.URL_API + "/login", getUsr).
  //     subscribe(res => {
  //       alert(res)
  //     })
  // }
}