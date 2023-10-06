import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../search-data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit{

  constructor(private searchDataService: SearchDataService) {}

  ngOnInit(): void {
    this.searchDataService.makeRequestCharacter()
  }
}
