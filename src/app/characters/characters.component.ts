import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../characters.service';
import { map } from 'rxjs/operators';
import { Character, CharacterResult } from '../character-result';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  charactersArray!: Character[];
  error: boolean = false;
  pageNumber: number = 1;
  id!: number;

  constructor(
    private searchDataService: SearchDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchDataService.getAllCharacters()
    this.searchDataService.getCharactersArray().subscribe((characters: Character[]) => {
      this.charactersArray = characters
    })
  }

  addPageNumber(): void {
    this.pageNumber = this.pageNumber + 1;
    if (this.pageNumber > 42) {
      this.pageNumber = 42;
    }
  }

  removePageNumber(): void {
    this.pageNumber = this.pageNumber - 1;
    if (this.pageNumber < 1) {
      this.pageNumber = 1;
    }
  }

  getPageNumber(): void {
    this.searchDataService.getPage(this.pageNumber).subscribe({
      next: (response) => {
        this.charactersArray = response.results;
      },
      error: (error) => console.log('GetCharcter error: ' + error),
      complete: () => console.log('GetCharcter complete'),
    });
  }
}
