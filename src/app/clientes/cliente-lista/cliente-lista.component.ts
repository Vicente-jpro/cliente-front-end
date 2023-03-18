import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit{

  clientes: Cliente[] = new Array();

  constructor(private clienteService: ClienteService){

  }

  ngOnInit(): void {
      this.clienteService
        .getClientes()
        .subscribe( response => {
          this.clientes = response;
          console.log(this.clientes);
        })
  }

}
