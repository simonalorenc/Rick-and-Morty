import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character, CharacterResult } from './character-result';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  private API = 'https://rickandmortyapi.com/api'
  charactersArray!: Character[]
  charactersArraySubject: BehaviorSubject<Character[]> = new BehaviorSubject<Character[]>([])

  constructor(private http: HttpClient) {}

  getCharactersApi(): Observable<CharacterResult> {
    const API_CHARACTER = `${this.API}/character`
    return this.http.get<CharacterResult>(API_CHARACTER)
  }

  getAllCharacters(): void {
    this.getCharactersApi().subscribe(
      (characterResult: CharacterResult) => {
        const characters = characterResult.results
        this.charactersArray = characters
        this.charactersArraySubject.next(characters)
      },
      (error) => {
        console.error('GetCharcter error: ' + error)
      }
    )
  }

  getCharactersArray(): Observable<Character[]> {
    return this.charactersArraySubject.asObservable()
  }

  getPage(pageNumber: Number): Observable<CharacterResult> {
    const API_CHARACTER = `${this.API}/character/?page=${pageNumber}`
    console.log(this.charactersArray)
    return this.http.get<CharacterResult>(API_CHARACTER)
  }

  getCharacter(id: number): Observable<Character> {
    console.log(this.charactersArray)
    const character = this.charactersArray.find((ch: any) => ch.id === id)!
    return of(character)
  }
}

 // getAllCharacters(): void{
  //   this.getCharactersApi().subscribe({
  //         next: (response) => {
  //           this.charactersArray = response.results;
  //           console.log(this.charactersArray)
  //         },
  //         error: (error) => console.log('GetCharcter error: ' + error),
  //         complete: () => console.log('GetCharcter complete'),
  //       });
  // }


