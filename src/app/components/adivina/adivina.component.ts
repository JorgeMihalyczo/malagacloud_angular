/*  Hacer una App donde el programa piense un numero
    del 1 al 100.
    El usuario tendrá 5 intentos para averiguar el
    numero pensado por la maquina

    Por cada intento, si falla, le debemos dar una pista
    y decirle si el numero introducido es menor o mayor que el buscado

    Si acierta le damos la enhorabuena.
    Si supera los 5 intentos y no acierta, le decimos que ha perdido 
    y mostramos la solucion.
*/ 

import { Component, OnInit, ViewChild } from '@angular/core';
import { CdTimerComponent, TimeInterface } from 'angular-cd-timer';

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
export class AdivinaComponent implements OnInit {

  titulo:string;
  numusuario:number;
  numadivina:number;
  intentos:number;
  finPartida:boolean;

  @ViewChild('basicTimer') contador!:CdTimerComponent;

  constructor() {
    console.log("Estoy en el constructor");
    this.titulo = "ADIVINA UN NUMERO EN 5 INTENTOS."
    this.numusuario = 0;
    this.numadivina = this.calcularNumRandomDeUnoACien();
    this.intentos = 0;
    this.finPartida = false;

    console.log(`El numero a adivinar por el usuario es ${this.numadivina}`);
    //TODO: Calcular el numero a adivinar
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log("EStamos en OnInit");
  }

  calcularNumRandomDeUnoACien():number {
    let numberRandom:number = 0;
    numberRandom = Math.floor(Math.random() * (100) +1);

    return numberRandom; 
  }

  comprobarIntento() {
    // 1 - El numero buscado es mayor que el introducido
    // 2 - El numero buscado es menor
    // 3 - Has ganado.
    // 4 - Has perdido. 
    console.log("Comprobar intento");
    console.log(this.numusuario);
    //TODO: Completar la logica del juego informando al usuario de las circunstancias posibles.

      if (this.numusuario === this.numadivina) {
        console.log(`Acertaste al número, felicitaciones! :) `);
        this.finPartida = true;
      } else if (this.numusuario < this.numadivina){
        console.log(`Numero incorrecto. Pista: El número secreto es mayor que ${this.numusuario}.. ;) `);
      } else if (this.numusuario > this.numadivina){
          console.log(`Numero incorrecto. Pista: El número secreto es menor que ${this.numusuario}.. ;) `);
        }
    this.intentos++;

    if (this.intentos === 5) {
      console.log(`Superaste el número de intentos. Perdiste :( , el numero secreto era -> ${this.numadivina}` );
      this.finPartida = true;
    }
    if (this.finPartida) {
      this.contador.stop();//paro el contador
      let ti:TimeInterface = this.contador.get();
      console.log("Has tardado " + ti.minutes + " minutos y " +ti.seconds + " segundos");
    }
  }

}
