import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '../episodes.service';
import { Episode, EpisodeResult } from '../episode-result';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit{
  episodesArray!: Episode[]
  episode!: Episode
  pageNumber: number = 1

  constructor(private episodesService: EpisodesService) {}

  ngOnInit(): void {
    this.episodesService.getAllEpisodes()
    this.episodesService.getEpisodesArray().subscribe(
      (episodes: Episode[]) => {
        this.episodesArray = episodes
      }
    )
  }

  addPageNumber(): void {
    this.pageNumber = this.pageNumber + 1
    if (this.pageNumber > 3) {
      this.pageNumber = 3
    }
  }

  removePageNumber(): void {
    this.pageNumber = this.pageNumber - 1
    if(this.pageNumber < 1) {
      this.pageNumber = 1
    }
  }

  getPageNumber(): void {
    this.episodesService.getPage(this.pageNumber).subscribe({
      next: (response) => {
        this.episodesArray = response.results
        this.episodesService.episodesArray = this.episodesArray
      },
      error: (error) => console.log('GetEpisode error: ' + error),
      complete: () => console.log('GetEpisode complete')
    })
  }
}

