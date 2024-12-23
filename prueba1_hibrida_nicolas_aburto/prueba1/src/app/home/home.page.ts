import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonSelect, IonItem, IonSelectOption, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { CirculoComponent } from "../circulo/circulo.component";
import { TrianguloComponent } from "../triangulo/triangulo.component";
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonList, IonItem, CirculoComponent, TrianguloComponent],
})
export class HomePage {

  componente = ""
  constructor() {}
  handleChange($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.componente = $event.target.value ?? ""
    }
    

}
