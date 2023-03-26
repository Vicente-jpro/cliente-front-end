import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ServicoPrestado } from './servico-prestado/servico-prestado';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  constructor(private httpClient: HttpClient) { }

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado>{
    return this.httpClient.post<ServicoPrestado>('http://localhost:8080/api/servico-prestado', servicoPrestado);
  }
}
