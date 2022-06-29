import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero.model";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
    hero: Hero = {
      name: ''
    };
  submitted = false;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }
  saveHero(): void {
    const data = {
      name: this.hero.name
    };
    this.heroService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newHero(): void {
    this.submitted = false;
    this.hero = {
      name: ''
    };
  }
}
