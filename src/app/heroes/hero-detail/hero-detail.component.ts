import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Hero, HeroService }  from '../hero.service';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$: Observable<Hero>;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private heroService: HeroService
  ) {}

  ngOnInit() {
      this.hero$ = this.route.paramMap
        .switchMap(
          (params: ParamMap) => this.heroService.getHero(params.get('id'))
        );
  }

  gotoHeroes(hero: Hero) {
      let heroId = hero ? hero.id : null;
      this.router.navigate(['/heroes', {id: heroId, foo: 'foo'}]);
  }

}
