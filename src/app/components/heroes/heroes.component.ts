import { Component, OnInit } from '@angular/core';
import { HeroesService, TipoHeroe } from "../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:TipoHeroe[] = [];

  constructor( private _heroesServices:HeroesService,
               private _router:Router) { }

  ngOnInit(): void {
    this.heroes = this._heroesServices.getHeroes();
  }

  verHeroe(i:number){
    this._router.navigate(['/heroe-detalle', i]);
  }

}
