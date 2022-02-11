import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { Episode } from '../../models/episode.model';
import * as episodeActions from '../../store/actions/episode.actions';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styles: [],
})
export class EpisodeComponent implements OnInit, OnDestroy {
  episode!: Episode | null;
  loading: boolean = false;
  error: any;

  episodeSubs?: Subscription;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.cargarEpisode();
  }

  cargarEpisode() {
    this.episodeSubs = this.store
      .select('episode')
      .subscribe(({ episode, loading, error }) => {
        this.episode = episode;
        console.log(episode);
        this.loading = loading;
        this.error = error;
      });

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(episodeActions.cargarEpisode({ id }));
    });
  }

  back() {
    this.route.navigate(['/locations']);
  }

  ngOnDestroy(): void {
    // this.subscriptions.forEach((s) => s.unsubscribe());
    this.episodeSubs?.unsubscribe();
  }
}
