import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodesService } from '../episodes.service';
import { Episode } from '../episode-result';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss'],
})
export class EpisodeDetailComponent implements OnInit {
  episode!: Episode
  charactersArray!: string[]

  constructor(
    private route: ActivatedRoute,
    private episodesService: EpisodesService
  ) {}

  ngOnInit(): void {
    this.getEpisode()
  }

  getEpisode(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.episodesService.getEpisode(id).
      subscribe(episode => {
        this.episode = episode
        this.charactersArray = this.episode.characters
      })
  }
}