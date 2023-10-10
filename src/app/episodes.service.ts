import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Episode, EpisodeResult } from './episode-result';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  private API = 'https://rickandmortyapi.com/api'
  episodesArray!: Episode[]
  episodesArraySubject: BehaviorSubject<Episode[]> = new BehaviorSubject<Episode[]>([])

  constructor(private http: HttpClient) { }

  getEpisodesApi(): Observable<EpisodeResult> {
    const API_EPISODES = `${this.API}/episode`
    return this.http.get<EpisodeResult>(API_EPISODES)
  }

  getAllEpisodes(): void {
    this.getEpisodesApi().subscribe(
      (episodeResult: EpisodeResult) => {
        const episodes = episodeResult.results
        this.episodesArray = episodes
        this.episodesArraySubject.next(episodes)
      },
      (error) => console.error('GetEpisode error ' + error)
    )
  }

  getEpisodesArray(): Observable<Episode[]> {
    return this.episodesArraySubject.asObservable()
  }

  getEpisode(id: number): Observable<Episode> {
    const episode = this.episodesArray.find((e: any) => e.id === id)!
    return of(episode)
  }

  getPage(pageNumber: Number): Observable<EpisodeResult> {
    const API_EPISODES  = `${this.API}/episode/?page=${pageNumber}`
    return this.http.get<EpisodeResult>(API_EPISODES)
  }
}
