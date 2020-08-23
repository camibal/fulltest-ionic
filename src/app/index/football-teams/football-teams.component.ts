import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-football-teams',
  templateUrl: './football-teams.component.html',
  styleUrls: ['./football-teams.component.scss'],
})
export class FootballTeamsComponent implements OnInit {
  getCitiess;

  constructor(private citiesService: CitiesService, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.citiesService.getCities().subscribe(data => {
      this.getCitiess = data;
    }, err => console.error(err)
    );
  }
}
