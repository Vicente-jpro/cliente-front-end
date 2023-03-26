import { Cliente } from "../clientes/cliente";

export class ServicoPrestado{
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