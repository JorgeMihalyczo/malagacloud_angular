import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-restaurantesnpag',
  templateUrl: './restaurantesnpag.component.html',
  styleUrls: ['./restaurantesnpag.component.css']
})
export class RestaurantesnpagComponent implements OnInit {

  lista_restaurantes!: Array<Restaurante>;

  totalRegistros:number=0;
  totalPorPagina:number=2;
  opcionesTamanio:number[]=[2, 4, 6, 8];
  paginaActual:number=0;

  constructor(private restaurantesService: RestauranteService) { }

  ngOnInit(): void {
    this.getRestaurantesPorPagina();
  }

  paginar(evento:PageEvent){
    console.log("evento paginator");
    this.paginaActual = evento.pageIndex;
    this.totalPorPagina = evento.pageSize;
    this.getRestaurantesPorPagina();
  }

  borrarrestaurante() {
    console.log("Quiere borrar el restaurante");
  }

  getRestaurantesPorPagina(){
    this.restaurantesService.getPaginaRestaurantes(this.paginaActual, this.totalPorPagina).subscribe(
      {
        complete: () => console.log("completo"),
        error: (errorRx) => console.error(errorRx),
        next: (pagina) =>{
          this.lista_restaurantes = <Array<Restaurante>> pagina.content;
          this.totalRegistros = pagina.totalElements;
        }
      }
    )
  }

  //TODO obtener el ID del restaurante y hacer el delete

}
