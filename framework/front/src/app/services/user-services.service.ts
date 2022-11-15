import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario, SendUsuario, GetUsuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UserServices {
  URL_API = 'http://localhost:3000/api/'
  URL_API_DISABLE = 'http://localhost:3000/api/delete/'
  
  users : Usuario[] = [];
  constructor(private http: HttpClient) { }

  // users = Usuario[]

  getUsers(index: String) {
    return this.http.get<Usuario[]>(this.URL_API+"page/"+index);
  }

  getUsersByName(index: String) {
    var dato = []
    dato.push({
      "name": index
    })
    JSON.stringify(dato);

    // return this.http.get<Usuario[]>(this.URL_API+"/name"+index, 
    // );
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

  
  deleteUser(ID:String){
    // console.log(`${this.URL_API+"delete"}/${ID}`)
    this.http.patch(`${this.URL_API_DISABLE}${ID}`,{});
    console.log("enviado")
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