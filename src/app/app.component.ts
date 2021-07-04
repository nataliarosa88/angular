import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  clientes: Cliente[] = [];

  constructor(private service: ClientesService){}
  
  ngOnInit(): void {
    this.service.getClientes().subscribe(data => this.clientes = data)
  }
}
