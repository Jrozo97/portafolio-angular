import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor ( 
    public _infoPagina: InfoPaginaService,
    public productosService: ProductosService 
    ) {

    console.log('Servicio de infoPagina listo');

   }

  

}
