import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombreEmpresa: string = 'Folklore Mexicano';
  universidad: string= 'Universidad Tecnologica de Hermosillo'
  year: number= 2023
  lugar: any= 'Hermosillo'
  unidades: any= 3
  secciones: any[]= [
    'Musica',
    'Danza',
    'Artes Visuales'
  ]
  validar: boolean = true

  musica = {
    sonora: 'Norteña',
    veracruz: 'Jarocha',
    guadalajara: 'Mariachi'
  }

  artesanias= [
    {
      region:1,
      guanajuato: 'Barro Cocido',
      oaxaca: 'Alebrijes',
      nayarit: 'Arte Huichol'
    }
  ]
  mandarSaludo(){
    console.log('Saludos desde la funcion.')
  }
  //CONSTRUCTOR
  constructor(){
    this.mandarSaludo()
    //Enviamos impresion a la consola
   console.log('Programacion con Angular');
   //Eviamos contenido del objeto
   console.log('El contenido de los objetos es el siguiente:', this.musica, this.artesanias)
   
  }
}
