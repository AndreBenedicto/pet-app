import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeuschamadosPageRoutingModule } from './meuschamados-routing.module';

import { MeuschamadosPage } from './meuschamados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeuschamadosPageRoutingModule
  ],
  declarations: [MeuschamadosPage]
})
export class MeuschamadosPageModule {}
