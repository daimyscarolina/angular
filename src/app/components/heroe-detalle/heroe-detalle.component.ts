import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroe-detalle',
  templateUrl: './heroe-detalle.component.html'
})
export class HeroeDetalleComponent implements OnInit {

  heroe:any = {};

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService,
               private _router:Router) {

    this.activatedRoute.params.subscribe( params => {

      this.heroe = this._heroesService.getHeroe( params['id'] );
      console.log(this.heroe)

    } )

  }

  regresar(){
    this._router.navigate(['/heroes']);
  }

  ngOnInit(): void {
  }

}
