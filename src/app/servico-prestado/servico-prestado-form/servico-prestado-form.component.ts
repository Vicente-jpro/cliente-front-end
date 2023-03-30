import { Component, OnInit } from '@angular/core';
import { ServicoPrestado } from '../servico-prestado';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from 'src/app/clientes/cliente';
import { DateFormatter } from 'src/app/utils/DateFormatter';


@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html'
})
export class ServicoPrestadoFormComponent implements OnInit {

  servicoPrestado: ServicoPrestado;
  cliente: Cliente;
  clientes: Cliente[] = [];
  errors: string[] = [];
  success: boolean = false

  constructor(
    private servicoPrestadoService: ServicoPrestadoService,
    private clienteService: ClienteService
     ){
    this.servicoPrestado = new ServicoPrestado();
    this.cliente = new Cliente();
  }

  onSubimit(): void{
    console.log("OnSubmit method", this.cliente, this.servicoPrestado);

    let dataFormatada = new DateFormatter(this.servicoPrestado.data);
    this.servicoPrestado.data = dataFormatada.getDate();

    this.servicoPrestadoService
      .salvar(this.servicoPrestado)
      .subscribe({
        next: response =>{
          this.servicoPrestado = response
          this.errors = []
          this.success = true
        },
        error: errorResponse =>{
          this.errors = errorResponse.error.errors
          
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

  limparFormulario(): void{
    this.servicoPrestado = new ServicoPrestado()
    
  }

}
