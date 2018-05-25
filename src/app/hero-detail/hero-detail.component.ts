import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input()  hero: Hero;
    heroes: Hero[];
    selectdHEro: Hero;

  constructor(private heroService: HeroService) {
    console.log(this.heroService);
  }

  ngOnInit() {
    console.log('Detail ngOnInit()');
  //  console.log(this.hero);
  }


}
