import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  greet: string;
  clientes: Cliente[];

  constructor(){
    this.greet = "Greet from class HelloComponent.";

    let vicente = new Cliente("Vicente Simão", 28);
    let luisa = new Cliente("Luísa Anibal", 24);
    let madalena = new Cliente("Madalena", 46);
    this.clientes = [vicente, luisa, madalena];
  }

}


class Cliente {

  constructor(
    public nome: string,
    public idade: number
  ){}

}