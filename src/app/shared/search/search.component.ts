import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  search: any[] = [];
  value: any;

  constructor(
    private searchServices: SearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (window.location.href.includes('character')) {
      this.route.params.subscribe(({ value }) => {
        this.value = value;
      });

      this.getInfo('character', this.value);
    } else if (window.location.href.includes('location')) {
      this.route.params.subscribe(({ value }) => {
        this.value = value;
      });

      this.getInfo('location', this.value);
    } else if (window.location.href.includes('episode')) {
      this.search = [];
      this.route.params.subscribe(({ value }) => {
        this.value = value;
      });

      this.getInfo('episode', this.value);
    }
  }

  getInfo(search: string, value: string) {
    this.searchServices
      .searchCharacter(search, value)
      .subscribe((info) => (this.search = info));
  }

  // desc(c: Character) {
  //   this.router.navigate(['/character', c.id]);
  // }
}
