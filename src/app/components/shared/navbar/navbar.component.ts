import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {  }

  searchHeroes(text:string){
    // console.log(text)
    this._router.navigate(['/heroe-search',text]);
  }

}
