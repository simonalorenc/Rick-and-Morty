import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  private API = 'https://rickandmortyapi.com/api'

  constructor(private http: HttpClient) { }

  makeRequestCharacter() {
    const API_CHARACTER = `${this.API}/character`

    this.http.get(API_CHARACTER).subscribe(json => {
      console.log(API_CHARACTER)
      console.log((json as any).results)
    })
  }
}
