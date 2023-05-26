import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Usuario } from './auth/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiBaseUrl: string = ""+environment.apiBaseURL + "/api/usuarios"
  constructor(private httpCliente: HttpClient) { }

  salvar(usuario: Usuario): Observable<any>{
    return this.httpCliente.post<Usuario>(`${this.apiBaseUrl}`, usuario);
  }
}
