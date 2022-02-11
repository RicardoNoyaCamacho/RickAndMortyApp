import { Component, OnInit, OnDestroy } from '@angular/core';
import { Episode } from '../../models/episode.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarEpisodes } from '../../store/actions/episodes.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styles: [],
})
export class EpisodesComponent implements OnInit, OnDestroy {
  episodes: Episode[] = [];

  loading: boolean = false;
  error: any;

  episodesSubs?: Subscription;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.episodesSubs = this.store
      .select('episodes')
      .subscribe(({ episodes, loading, error }) => {
        this.episodes = episodes;
        this.loading = loading;
        this.error = error;
      });
    this.store.dispatch(cargarEpisodes());
  }

  list(e: Episode) {
    this.router.navigate(['/episode', e.id]);
  }

  ngOnDestroy(): void {
    this.episodesSubs?.unsubscribe();
  }
}
