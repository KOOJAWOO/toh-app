import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input()  hero: Hero;
    heroes: Hero[];
    selectdHEro: Hero;


  constructor(private route: ActivatedRoute, private heroService: HeroService,
              private location: Location) {
    console.log(this.heroService);
  }

  ngOnInit() {
    console.log('Detail ngOnInit()');
  //  console.log(this.hero);
    this.getHero();
  }

  getHero(): void {
    /*String -> number 로 변환 하기 위해서 Number()함수 사용*/
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(res => this.hero = res);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
