import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

import { ServicoPrestado } from './servico-prestado/servico-prestado';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiBaseURL: string = environment.apiBaseURL + `/api/servico-prestados`;

  constructor(private httpClient: HttpClient) { }

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado>{
    const headers = this.getAuthorizationBearerToken()

    return this.httpClient.post<ServicoPrestado>(`${this.apiBaseURL}`, servicoPrestado, {headers});
  }

  listarTodos(): Observable<ServicoPrestado[]>{
    const headers = this.getAuthorizationBearerToken()

    return this.httpClient.get<ServicoPrestado[]>(`${this.apiBaseURL}`, {headers});
  }
  
  pesquizarServicosPrestados(nomeCliente: string, dataServicoPrestado: string): 
  Observable<ServicoPrestado[]>{
    const headers = this.getAuthorizationBearerToken()

    //http://localhost:8080/api/servico-prestado/search?nome=vicete&data=20/03/2023
    return this.httpClient.get<ServicoPrestado[]>(
      `${this.apiBaseURL}/search?nome=${nomeCliente}&data=${dataServicoPrestado}`,
      {headers}
      );
  }

  getAuthorizationBearerToken(){
    const tokenString =  localStorage.getItem('key_access_token')
    const token = JSON.parse(tokenString || '{}')
    const headers = {
      'Authorization': 'Bearer '+token.access_token
    }
    return headers
  }

}
