import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from 'src/app/clientes/cliente';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ServicoPrestado } from '../servico-prestado';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html'
})
export class ServicoPrestadoListaComponent  implements OnInit{

  clientes: Cliente[] = []
  servicoPrestados: ServicoPrestado[] = []
  servicoPrestado: ServicoPrestado
  constructor(private servicoPrestadoService: ServicoPrestadoService,
    private clienteService: ClienteService){
      this.servicoPrestado = new ServicoPrestado
  }

  ngOnInit(): void {
      
  }
}
