import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailsComponent} from "./details/details.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AddHeroComponent} from "./add-hero/add-hero.component";
import {HeroSearchComponent} from "./hero-search/hero-search.component";

const routes: Routes = [
  { path: 'all', component: DashboardComponent },
  { path: 'all/:id', component: DetailsComponent },
  { path: 'add', component: AddHeroComponent },
  { path: 'find',component:HeroSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
