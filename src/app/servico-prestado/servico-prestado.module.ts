import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';


@NgModule({
  declarations: [
    ServicoPrestadoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ServicoPrestadoRoutingModule
  ],
  exports:[
    ServicoPrestadoFormComponent,
  ]
})
export class ServicoPrestadoModule { }
