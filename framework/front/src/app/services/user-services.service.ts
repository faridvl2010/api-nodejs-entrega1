import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SendUsuario } from '../models/Usuario';
import { UsuarioLog } from '../models/UsuarioLog';

@Injectable({
  providedIn: 'root'
})
export class UserServices {

  URL_API = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.URL_API);
  }

  registerUser(NAME: String, LAST_NAME: String, EMAIL: String, TYPE_DOCUMENT: string, DOCUMENT: String, PASSWORD: string) {
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
  // logUser(EMAIL: String, PASSWORD: string) {
  //   let getUser: UsuarioLog = {
  //     EMAIL,
  //     PASSWORD
  //   }

  //   this.http.get(this.URL_API + "", getUser).
  //     subscribe(res => {
  //       alert(res)
  //     })
  // }
}