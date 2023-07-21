import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { MapaComponent } from '../mapa/mapa.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  listaRestaurantesFiltrados!:Array<Restaurante>;
  @ViewChild('cajabusqueda') cajaInput!:ElementRef;
  @ViewChild('mapa') mapa!:MapaComponent;

  constructor(private restauranteService:RestauranteService) { }

  ngOnInit(): void {
  }

  busqueda1() {
    let terminoBusqueda:string = this.cajaInput.nativeElement.value;
    console.log('busqueda1 ' + terminoBusqueda);
    //TODO: consumir el servicio web de búsqueda
    //para traer los restaurantes que coincidan
    //con el término de búsqueda
    if (terminoBusqueda!=''){
      this.restauranteService.busquedaRestaurantePorClave(terminoBusqueda).subscribe
      (
        {
          complete: () => console.log("completado"),
          error: (errorRx) => console.error(errorRx),
          next: (listaRestaurantesRx) =>
          {
            this.listaRestaurantesFiltrados = listaRestaurantesRx;
          }
        }
      )
    } else {
      this.listaRestaurantesFiltrados.length = 0;
    }
  }

  restauranteFiltrado (restaurante:Restaurante) {
    console.log('Nombre encontrado = ' +restaurante.nombre);
    this.mapa.dibujarPosicion(restaurante.latitud, restaurante.longitud);
  }
}