import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  proyecto: string= 'Folklore Mexicano'
  universidad: string='Universidad Tecnologica de Hermosillo'
  descripcion: string='Nuestra pagina es un trabajo de la materia de Aplicaciones Web'
  anio = new Date().getFullYear()

  constructor(){
    this.mostrar()
  }
  
  mostrar(){
  console.log(this.proyecto, this.universidad, this.descripcion, this.anio);
  }
}
