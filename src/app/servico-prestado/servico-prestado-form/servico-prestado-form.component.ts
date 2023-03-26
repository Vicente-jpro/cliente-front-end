import { Component, OnInit } from '@angular/core';
import { ServicoPrestado } from '../servico-prestado';


@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html'
})
export class ServicoPrestadoFormComponent implements OnInit {

  servicoPestado: ServicoPrestado;
  constructor(){
    this.servicoPestado = new ServicoPrestado();
    this.servicoPestado.descricao = "Vicente Pestou um servico";
    this.servicoPestado.data = '02/12/2023';
    this.servicoPestado.valor = 1000;
  }

  onSubimit(): void{
    console.log(this.servicoPestado)
  }

  ngOnInit(): void {
      
  }

}
