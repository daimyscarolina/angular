import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import { AboutComponent} from "./components/about/about.component";
import { HeroesComponent} from "./components/heroes/heroes.component";
import { HeroeDetalleComponent } from "./components/heroe-detalle/heroe-detalle.component";
import { HeroeSearchComponent } from "./components/heroe-search/heroe-search.component";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'heroes', component: HeroesComponent},
  { path: 'heroe-detalle/:id', component: HeroeDetalleComponent},
  { path: 'heroe-search/:text', component: HeroeSearchComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
