import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceComponent } from './choice/choice.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { LocationsComponent } from './locations/locations.component';
import { EpisodesComponent } from './episodes/episodes.component';

const routes: Routes = [
  { path: '', redirectTo: '/choice', pathMatch: 'full' },
  { path: 'choice', component: ChoiceComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'detail/:id', component: CharacterDetailsComponent },
  { path: 'locations', component: LocationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
