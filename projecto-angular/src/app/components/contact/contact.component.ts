import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider:number;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;

  constructor() { this.captions = true;}

  ngOnInit() {
 
  }

  cargarSlider(){
  	this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
  	this.anchuraToSlider = false;
  }

  getAutor(event){
  	this.autor = event;
   }
}
