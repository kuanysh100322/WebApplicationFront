import {Component, Input, OnInit} from '@angular/core';
import {HeroService} from "../hero.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Hero} from "../hero.model";



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  currentTutorial: Hero = {
    name: ''

  };
  heroes:any;
  message = '';
  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.getHero(this.route.snapshot.params['id']);
  }
  getHero(id: string): void {
    this.heroService.getDetails(id)
      .subscribe(
        data => {
          this.currentTutorial = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  deleteHero(): void {
    this.heroService.delete(this.currentTutorial.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/all']);
        },
        error => {
          console.log(error);
        });
  }
  updateHero(): void {
    this.heroService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }
}
