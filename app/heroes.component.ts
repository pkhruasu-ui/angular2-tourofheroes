import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'my-heroes',
	templateUrl : 'app/heroes.component.html',
  	styleUrls : [ 'app/heroes.component.css']
})

export class HeroesComponent implements OnInit {
	title= 'Tour of Heroes';	
	heroes : Hero[];
	selectedHero: Hero;
	
	onSelect(hero: Hero) { this.selectedHero = hero; };
	
	constructor(
		private router: Router,
		private heroService: HeroService
	) {};
	
	getHeroes() {
		this.heroService.getHeroes().then( heroes => this.heroes = heroes);
	};

	getHeroesSlowly() {
		this.heroService.getHeroesSlowly().then( heroes => this.heroes = heroes);	
	}

	ngOnInit() {
		this.getHeroes();
		// this.getHeroesSlowly();
	}

	gotoDetail() {
		this.router.navigate(['/detail', this.selectedHero.id ]);
	}
}