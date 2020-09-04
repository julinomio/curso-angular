import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from './../Models/destino-viaje.Model';
import { DestinosApiClient } from './../Models/destinos-api-client.Model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;

  constructor(public destinosApiClient: DestinosApiClient) {
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit(): void {
  }
  agregado(d: DestinoViaje) {
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(e: DestinoViaje){
    //desmarcar todos los demas en en array de elegidos
    //this.destinos.forEach(function (x) {x.setSelected(false); });
    //se marca el elegido
    //d.setSelected(true);
    this.destinosApiClient.getAll().forEach(x => x.setSelected(false));
    e.setSelected(true);
  }
}
