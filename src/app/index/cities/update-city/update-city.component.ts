import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CitiesService } from 'src/app/services/cities.service';
import { Cities } from 'src/app/interface/cities';

@Component({
  selector: 'app-update-city',
  templateUrl: './update-city.component.html',
  styleUrls: ['./update-city.component.scss'],
})
export class UpdateCityComponent implements OnInit {

  @Input() cities: Cities = {
    id: 0,
    city: '',
    country: '',
    continent: ''
  }

  constructor(public navParams: NavParams, public modalCtrl: ModalController, private citiesService: CitiesService) { }

  ngOnInit(): void {
  }

  public closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  updateCity() {
    this.citiesService.updateCity(this.cities.id, this.cities).subscribe(res => {
      this.closeModal();
      alert('Updated City');
      location.reload();
    }, err => console.error(err)
    )
  }
}
