import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { FootballTeamsComponent } from './football-teams/football-teams.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
      { path: '', component: HomeComponent },
      { path: 'cities', component: CitiesComponent },
      { path: 'teams', component: FootballTeamsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
