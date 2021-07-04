import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from './cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  baseUrl = environment.baseUrl;
  
  constructor(private http:HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl)
  }
}

