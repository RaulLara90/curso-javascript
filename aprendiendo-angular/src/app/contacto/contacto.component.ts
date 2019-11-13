import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario'; 

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent implements OnInit {

  public usuario: ContactoUsuario;

  constructor() { 
  	this.usuario = new ContactoUsuario('','','','');
  }

  ngOnInit() {
  }

  onSubmit(form){
  	form.reset();
  }

}
