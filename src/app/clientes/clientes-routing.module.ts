import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteIndexComponent } from './cliente-index/cliente-index.component';

const routes: Routes = [
  { path: 'cliente-form', component: ClienteFormComponent},
  { path: 'cliente-index', component: ClienteIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
