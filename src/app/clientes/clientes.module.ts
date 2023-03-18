import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteIndexComponent } from './cliente-index/cliente-index.component';


@NgModule({
  declarations: [
    ClienteFormComponent,
    ClienteIndexComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ],
  exports:[
    ClienteFormComponent,
    ClienteIndexComponent,
  ]
})
export class ClientesModule { }
