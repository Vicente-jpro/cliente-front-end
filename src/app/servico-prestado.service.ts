import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

import { ServicoPrestado } from './servico-prestado/servico-prestado';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiBaseURL: string = environment.apiBaseURL + '/api/servico-prestado';

  constructor(private httpClient: HttpClient) { }

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado>{
    return this.httpClient.post<ServicoPrestado>(`${this.apiBaseURL}`, servicoPrestado);
  }
}
