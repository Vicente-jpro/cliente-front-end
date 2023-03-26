import { Cliente } from "../clientes/cliente";

export class servicoPrestado{
    descricao: string;
    valor: number;
    data: string;
    cliente: Cliente;

    constructor(){
        this.descricao = "";
        this.valor = 0;
        this.data = "";
        this.cliente = new Cliente();
    }
}