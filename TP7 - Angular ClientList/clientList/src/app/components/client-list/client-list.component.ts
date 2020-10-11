import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})

export class ClientListComponent implements OnInit {
  @Input()
  clientList: Array<Client>= new Array<Client>();
 
  @Output()
  selectClientEvent = new EventEmitter<Client>();
  @Output()
  deleteClientEvent = new EventEmitter<Client>();
  @Output()
  editClientEvent = new EventEmitter<Client>();

  constructor() { }

  ngOnInit(): void {
  }

  selectClient(client: Client){
    this.selectClientEvent.emit(client);
  }

  editClient(client: Client){
    this.editClientEvent.emit(client);
  }

  deleteClient(client: Client){
    this.deleteClientEvent.emit(client);
  }

}
