import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Detalledos } from '../interfaces/detalledos';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DetalleDataService {
  private URL: string = 'http://localhost:3000/detalles';

  constructor(private http: HttpClient) { }

  getResponse() {
    return this.http.get(this.URL);
  }
  // Método para realizar una petición POST
    enviarDetalle(detalle: Detalledos): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Convierte el objeto detalle a formato JSON
    const detalleJSON = JSON.stringify(detalle);

    return this.http.post(this.URL, detalleJSON, { headers });
  }

}
