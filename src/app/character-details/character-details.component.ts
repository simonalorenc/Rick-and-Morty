import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SearchDataService } from '../characters.service';
import { Character } from '../character-result';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  character!: Character
  episodesArray!: string[] 

  constructor(
    private route: ActivatedRoute,
    private searchDataService: SearchDataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCharacter()
  }

  getCharacter(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.searchDataService.getCharacter(id)
      .subscribe(character => {
        this.character = character
        console.log(character)
        console.log(this.character.episode)
        this.episodesArray = this.character.episode
        
      })
  }
}
