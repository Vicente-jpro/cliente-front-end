import { Component, OnInit } from '@angular/core';
import { ServicoPrestado } from '../servico-prestado';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from 'src/app/clientes/cliente';


@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html'
})
export class ServicoPrestadoFormComponent implements OnInit {

  servicoPestado: ServicoPrestado;
  clientes: Cliente[] = [];
  errors: string[] = [];
  constructor(
    private servicoPrestadoService: ServicoPrestadoService,
    private clienteService: ClienteService
     ){
    this.servicoPestado = new ServicoPrestado();
  }

  onSubimit(): void{
    this.servicoPrestadoService
      .salvar(this.servicoPestado)
      .subscribe({
        next: response =>{
          this.servicoPestado = response
          this.errors = []
        },
        error: errorResponse =>{
          this.errors = errorResponse.error.erros
        }

      })
    console.log(this.servicoPestado)
  }

  ngOnInit(): void {
    this.clienteService
      .getClientes()
      .subscribe({
        next: response => {
          this.clientes = response
          console.log(response)
        },
        error: errorResponse =>{
          this.clientes = errorResponse.error
          console.log(errorResponse)
        }
      })
  }

}
