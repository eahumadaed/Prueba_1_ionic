import { Component } from '@angular/core';
import { TrianguloEscaleno } from '../../models/triangulo-escaleno'; 

@Component({
  selector: 'app-triangulo-escaleno',
  templateUrl: './triangulo-escaleno.component.html',
  styleUrls: ['./triangulo-escaleno.component.scss'],
})
export class TrianguloEscalenoComponent {
  ladoA: number = 0; 
  ladoB: number = 0;
  ladoC: number = 0;
  perimetro: number | null = null;

  calcularPerimetro() {
    const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC); 
    this.perimetro = triangulo.calcularPerimetro(); 
  }
}
