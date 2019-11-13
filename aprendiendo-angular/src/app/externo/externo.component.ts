import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: number;
  public fecha: any;
  public new_user: any;
  public usuario_guardado;

  constructor(
  			 private _peticionesService: PeticionesService) { 
  		this.userId = 1;
      this.new_user = {
          "name" : "",
          "job" : ""
      };
  }

  ngOnInit() {
  	this.fecha = new Date(2019,5,20);
  	this.cargaUsuario();
  }

  cargaUsuario(){
  	this.user = false;
  	this._peticionesService.getUser(this.userId).subscribe(
    		result => {
    			this.user = result.data;
    		},
    		error => {
    			console.log(error)
    		}
	  );
  }

  onSubmit(form){
    this._peticionesService.addUser(this.new_user).subscribe(
        response => {
          this.usuario_guardado = response;
          console.log(response)
          form.reset();
        },
        error => {
          console.log(error)
        }
    );
  }

}
