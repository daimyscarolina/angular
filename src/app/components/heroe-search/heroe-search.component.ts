import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html'
})
export class HeroeSearchComponent implements OnInit {

  arrHeroeSearch:any[] = [];
  terming:string = '';

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesServices:HeroesService,
              private _router:Router){ }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.terming = params['text'];
      this.arrHeroeSearch = this._heroesServices.searchHeroesServ( params['text'] );
      console.log(this.arrHeroeSearch)

    } )

  }

  verHeroe(i:number){
    this._router.navigate(['/heroe-detalle', i]);
  }

}
