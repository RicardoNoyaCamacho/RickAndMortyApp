import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  disable: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  @ViewChild('txtInput') myInput!: ElementRef;

  ngOnInit(): void {}

  irCharacter(value: string) {
    if (window.location.href.includes('character')) {
      this.myInput.nativeElement.value = '';
      this.router.navigate(['characters', value]);
    } else if (window.location.href.includes('location')) {
      this.myInput.nativeElement.value = '';
      this.router.navigate(['locations', value]);
    } else if (window.location.href.includes('episode')) {
      this.myInput.nativeElement.value = '';
      this.router.navigate(['episodes', value]);
    }
  }
}
