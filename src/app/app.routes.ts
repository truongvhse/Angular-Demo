import { Routes } from '@angular/router';
import { GiphyComponent, PokemonComponent } from './features';

export const routes: Routes = [
  {
    path: 'pokemon',
    component: PokemonComponent,
  },
  {
    path: 'giphys',
    component: GiphyComponent,
  },
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full',
  },
];
