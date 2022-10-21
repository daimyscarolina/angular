import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  //Con esto podemos recibir informacion del padre para el hijo
  @Input()  i:any = {};
  // @ts-ignore
  @Input()  index:number;

  //Con esto podemos recibir informacion del hijo para el padre
  // @ts-ignore
  @Output() heroeSeleccionado:EventEmitter<number>;

  constructor(private _router:Router) {
    this.heroeSeleccionado = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // // console.log(this.index)
    this._router.navigate(['/heroe-detalle', this.index]);
    // this.heroeSeleccionado.emit(this.index);
  }

}
