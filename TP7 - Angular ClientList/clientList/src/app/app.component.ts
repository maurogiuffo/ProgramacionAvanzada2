import { Component } from '@angular/core';
import { Client } from './models/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientList';
  clientList= new Array<Client>();
  client = new Client();
  clientToEdit = null;


  selectClient(client: Client){
    this.client= client;
  }

  editClient(client: Client){
    this.clientToEdit = client;
  }

  deleteClient(client: Client){
    var index= this.clientList.indexOf(client);
    this.clientList.splice(index,1);
  }
}
