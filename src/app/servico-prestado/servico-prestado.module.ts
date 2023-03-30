import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ClientesModule } from '../clientes/clientes.module';
import { RouterModule } from '@angular/router';
import { ServicoPestadoListaComponent } from './servico-pestado-lista/servico-pestado-lista.component';

@NgModule({
  declarations: [
    ServicoPrestadoFormComponent,
    ServicoPestadoListaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientesModule,
    RouterModule,
    ServicoPrestadoRoutingModule
  ],
  exports:[
    ServicoPrestadoFormComponent,
    ServicoPestadoListaComponent,
  ]
})
export class ServicoPrestadoModule { }
