import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceComponent } from './choice/choice.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { LocationsComponent } from './locations/locations.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/choice', pathMatch: 'full' },
  { path: 'choice', component: ChoiceComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterDetailsComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'location/:id', component: LocationDetailComponent }, 
  { path: 'episodes', component: EpisodesComponent },
  { path: 'episode/:id', component: EpisodeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
