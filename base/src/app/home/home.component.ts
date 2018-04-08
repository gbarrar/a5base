import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers:[]
})
export class HomeComponent{

  public titulo:String;

  constructor(){
    this.titulo = "Home de la aplicación";
  }

}
