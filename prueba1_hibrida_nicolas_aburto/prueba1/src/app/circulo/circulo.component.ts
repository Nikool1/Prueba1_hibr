import { Component, OnInit } from '@angular/core';
import { IonInput, IonList, IonButton, IonItem, IonText, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { Circulo } from '../modelo/circulo';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonText, IonItem, IonButton, IonInput, IonList, FormsModule]
})
export class CirculoComponent  implements OnInit {




  radio = "0"
  resultado = ""

  constructor() { }

  ngOnInit() {}

  calcularCirculo() {
    const j = new Circulo()
    const raddio = parseInt(this.radio)
    const result = j.calcularPerimetroCirculo(raddio)
    this.resultado = `El perímetro es de: ${result.toFixed(2)}`;

    }

}
