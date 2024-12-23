export class Triangulo {
    ladoA: number;
    ladoB: number;
    ladoC: number;
  
    constructor(ladoA: number, ladoB: number, ladoC: number) {
      this.ladoA = ladoA;
      this.ladoB = ladoB;
      this.ladoC = ladoC;
    }
  
    calcularPerimetro(): number {
      return this.ladoA + this.ladoB + this.ladoC;
    }
  }
  