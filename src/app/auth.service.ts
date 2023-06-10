import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Usuario } from './auth/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiBaseUrl: string = environment.apiBaseURL + "/api/usuarios"
  tokenUrl: string = environment.apiBaseURL + environment.obterTokenUrl 
  clientID: string = environment.clientID
  clientSecret: string = environment.clienteSecret

  constructor(private httpCliente: HttpClient) { }

  salvar(usuario: Usuario): Observable<any>{
    return this.httpCliente.post<Usuario>(`${this.apiBaseUrl}`, usuario);
  }

  tentarLogar(usuario: Usuario): Observable<any>{
    console.log(this.tokenUrl)
    const params = new HttpParams()
          .set('username', usuario.username)
          .set('password', usuario.passwrd)
          .set('grant_type', 'password')

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic '+ btoa(`${this.clientID}:${this.clientSecret}`)
    }
    return this.httpCliente.post(this.tokenUrl, params.toString(), {headers})
  }
}
