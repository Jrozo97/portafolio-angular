import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescipcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescipcion ={};
  id: string ="";

  constructor( 
    private route: ActivatedRoute,
    public productosService: ProductosService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe( params => {
        this.productosService.getProducto( params['id'] )
          .subscribe( (producto: ProductoDescipcion) => {
            this.id = params['id'];
            this.producto = producto;
          });
      });
  }

}
