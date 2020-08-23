import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-delete-city',
  templateUrl: './delete-city.component.html',
  styleUrls: ['./delete-city.component.scss'],
})
export class DeleteCityComponent implements OnInit {
  @Input() id: string;

  constructor(public modalCtrl: ModalController, private citiesService: CitiesService) { }

  ngOnInit() { }

  public closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  deleteCity() {
    this.citiesService.deleteCity(this.id).subscribe(res => {
      alert('city deleted');
      this.closeModal();
      location.reload();
    }, err => console.error(err)
    )
  }
}