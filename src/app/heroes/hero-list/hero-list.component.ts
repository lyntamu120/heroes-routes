import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { HeroService, Hero } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  selectedId: number;

  heroes$: Observable<Hero[]>;  

  constructor(
      private heroService: HeroService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap
        .switchMap((params: ParamMap) => {
            this.selectedId = +params.get('id');
            return this.heroService.getHeroes();
        });
  }

}
