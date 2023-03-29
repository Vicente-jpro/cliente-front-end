import { Cliente } from "../clientes/cliente";

export class ServicoPrestado{
    idPrestacaoServico: number;
    descricao: string;
    valor: number;
    data: string;
    cliente: Cliente;

    constructor(){
        this.idPrestacaoServico = 0;
        this.descricao = "";
        this.valor = 0;
        this.data = "";
        this.cliente = new Cliente();
    }
}