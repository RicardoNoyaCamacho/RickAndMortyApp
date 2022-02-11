import { Component, OnInit } from '@angular/core';
import { Location } from '../../interfaces/interfaces';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styles: [],
})
export class EpisodeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
