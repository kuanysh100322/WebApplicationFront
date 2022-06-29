import { Component, OnInit } from '@angular/core';
import {HeroSearchService} from "../hero-search.service";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {Hero} from "../hero.model";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes?: Hero[];
  currentTutorial?: Hero;
  currentIndex = -1;
  name = '';

  constructor(private heroService: HeroSearchService) {}
  ngOnInit(): void {
  }

  searchName(): void {
    this.heroService.find(this.name)
      .subscribe(
        data => {
          this.heroes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}

