import { Component, OnInit } from '@angular/core';
import { IonInput, IonList, IonButton, IonItem, IonText, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { Triangulo } from '../modelo/Triangulo';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonText, IonItem, IonButton, IonInput, IonList, FormsModule]
})
export class TrianguloComponent  implements OnInit {

  ladoA= "0"
  ladoB= "0"
  ladoC= "0"
  resultado = ""
  constructor() { }

  ngOnInit() {}

  calcularTriangulo() {
  const j = new Triangulo(
    parseInt(this.ladoA),
    parseInt(this.ladoB),
    parseInt(this.ladoC)
  );
  const result = j.calcularPerimetro();

  this.resultado = `El perímetro del triángulo es: `+result;
}

}
