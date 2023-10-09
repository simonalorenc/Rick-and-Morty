import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterResult } from './character-result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  private API = 'https://rickandmortyapi.com/api'

  constructor(private http: HttpClient) { }

  getCharacter(): Observable<CharacterResult> {
    const API_CHARACTER = `${this.API}/character`

    return this.http.get<CharacterResult>(API_CHARACTER)
  }

  getPage(pageNumber: Number): Observable<CharacterResult> {
    const API_CHARACTER = `${this.API}/character/?page=${pageNumber}`
    console.log('fds')
    return this.http.get<CharacterResult>(API_CHARACTER)
  }
}


