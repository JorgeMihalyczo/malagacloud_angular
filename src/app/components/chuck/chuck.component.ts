import { Component } from '@angular/core';
import { Observer } from 'rxjs';
import { ChuckPhrase } from 'src/app/models/chuck-phrase';
import { ChuckService } from 'src/app/services/chuck.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent {
  
  frase!:string;
  iconUrl!:string;

  observerChuck:Observer<ChuckPhrase>  = {
    next: (fraseNueva:ChuckPhrase) => {
      this.frase = fraseNueva.value;
      this.iconUrl = fraseNueva.iconUrl;
    },
    error: fallo => console.error('Fallo al rx el Perro ' + fallo),
    complete: () => console.log('Comunicación completada')
  };

  constructor(private chuckService:ChuckService){
    console.log("cargando frase");
  }

  ngOnInit(): void {
    console.log("Vamos a traernos un perro del servidor");
    //cuando me suscribo al Observer, le estoy diciendo, cuando vuelvas, me avisas aquí
    this.getPhrase();
    console.log("PERRO SOLICTADO ... ");
  }

  getPhrase(){
    this.chuckService.getRandomPhrase().subscribe(this.observerChuck);
  }

}
