import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from 'src/app/clientes/cliente';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ServicoPrestado } from '../servico-prestado';
import { DateFormatter } from 'src/app/utils/DateFormatter';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html'
})
export class ServicoPrestadoListaComponent  implements OnInit{

  clientes: Cliente[] = []
  servicoPrestados: ServicoPrestado[] = []
  dataServicoPrestado: string = ''
  nomeCliente: string = ''
  constructor(private servicoPrestadoService: ServicoPrestadoService,
    private clienteService: ClienteService){
    
     
  }

  ngOnInit(): void {

      this.servicoPrestadoService
      .listarTodos()
      .subscribe({
        next: response =>{
          this.servicoPrestados = response
          console.log("Servico prestado obtido com sucesso")
        },
        error: errorResponse =>{
          this.servicoPrestados = errorResponse.error
          console.log("Erro na obtenção dos servicos prestados", errorResponse.error)
        }
      })
  } 

  onSubmit(): void{
    let data = new DateFormatter(this.dataServicoPrestado)
    this.servicoPrestados = []
    
    this.servicoPrestadoService
      .pesquizarServicosPrestados(this.nomeCliente, data.getDate())
      .subscribe({
        next: response =>{
          this.servicoPrestados = response
        },
        error: errorResponse =>{
          this.servicoPrestados = []
          this.servicoPrestados = errorResponse.error
          console.log("Erro na pesquisa", errorResponse.error);
        }
      })
    
  
    console.log(data)
    console.log(this.nomeCliente) 
  }

}
