import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeuschamadosPage } from './meuschamados.page';

const routes: Routes = [
  {
    path: '',
    component: MeuschamadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeuschamadosPageRoutingModule {}
