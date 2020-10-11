import { Component,Input, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {
  @Input()
  clientList : Array<Client>= new Array<Client>();

  @Input()
  clientToEdit: Client = new Client();
  
  firstName : string;
  lastName : string;

  constructor() { }

  ngOnInit(): void {
  }

  addClient()
  {
    let client= new Client();
    client.clientId= this.clientList.length;
    client.firstName = this.firstName;
    client.lastName = this.lastName;
    this.clientList.push(client);
    this.firstName = "";
    this.lastName="";
  }
  
  saveClient()
  {
    this.clientToEdit.firstName = this.firstName;
    this.clientToEdit.lastName = this.lastName;
    this.clientToEdit=null;
    this.firstName = "";
    this.lastName="";
  }

}
