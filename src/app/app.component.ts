import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //la etiqueta raiz o padre, o Hook
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  // Aqui va el javascript - la funcionalidad del componente
  constructor() {
    console.log("EStamos en el constructor del app component");
  }
}
