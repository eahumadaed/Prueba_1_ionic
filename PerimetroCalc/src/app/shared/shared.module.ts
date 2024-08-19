import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CirculoComponent } from '../components/circulo/circulo.component';
import { TrianguloEscalenoComponent } from '../components/triangulo-escaleno/triangulo-escaleno.component';

@NgModule({
  declarations: [
    CirculoComponent,
    TrianguloEscalenoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    CirculoComponent,
    TrianguloEscalenoComponent
  ]
})
export class SharedModule {}
