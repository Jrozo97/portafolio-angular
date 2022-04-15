import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    
    this.cargarInfo();
    this.cargarEquipo();
    
  }

  private cargarInfo() {
    this.http
      .get('assets/data/data-page.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    this.http
      .get('https://angular-html-9a2f5-default-rtdb.firebaseio.com/Equipo/equipo.json')
      .subscribe((resp: any) => {
        this.equipo =resp;
      });
  }
}
