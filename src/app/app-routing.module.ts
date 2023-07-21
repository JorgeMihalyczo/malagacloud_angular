import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { PerroComponent } from './components/perro/perro.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { CadenaComponent } from './components/cadena/cadena.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { FormularioRestauranteComponent } from './components/formulario-restaurante/formulario-restaurante.component';
import { RestaurantesnpagComponent } from './components/restaurantesnpag/restaurantesnpag.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { MapaComponent } from './components/mapa/mapa.component';

// En este Array de rutas, tengo que tener una ruta path asociado al componente
const routes: Routes = [
  {path:"dni", component: DniComponent},
  {path:"perros", component: PerroComponent},
  {path:"adivina", component:AdivinaComponent},
  {path:"cadena", component:CadenaComponent},
  {path:"chuck", component:ChuckComponent},
  {path:"restaurantes", component:RestaurantesComponent},
  {path:"restaurante/nuevo", component:FormularioRestauranteComponent},
  {path:"restaurantepag", component:RestaurantesnpagComponent},
  {path:"busqueda", component:BusquedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
