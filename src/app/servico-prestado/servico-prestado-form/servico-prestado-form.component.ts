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

  servicoPrestado: ServicoPrestado;
  cliente: Cliente;
  clientes: Cliente[] = [];
  errors: string[] = [];
  constructor(
    private servicoPrestadoService: ServicoPrestadoService,
    private clienteService: ClienteService
     ){
    this.servicoPrestado = new ServicoPrestado();
    this.cliente = new Cliente();
  }

  onSubimit(): void{
    console.log("OnSubmit method", this.cliente, this.servicoPrestado);
    this.servicoPrestadoService
      .salvar(this.servicoPrestado)
      .subscribe({
        next: response =>{
          this.servicoPrestado = response
          this.errors = []
        },
        error: errorResponse =>{
          this.errors = errorResponse.error.erros
        }

      })
    
  }

  ngOnInit(): void {
    this.clienteService
      .getClientes()
      .subscribe({
        next: response => {
          this.clientes = response
         
        },
        error: errorResponse =>{
          this.clientes = errorResponse.error
         
        }
      })
  }

}
