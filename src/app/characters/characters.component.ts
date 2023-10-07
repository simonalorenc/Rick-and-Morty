import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../search-data.service';
import { map } from 'rxjs/operators'
import { Character, CharacterResult } from '../character-result';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit{
  charactersArray!: Character[]

  constructor(private searchDataService: SearchDataService) {}

  ngOnInit(): void {
    this.searchDataService.getCharacter().subscribe(result => {
      this.charactersArray = result.results
    })
  }
}
