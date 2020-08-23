import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CitiesService } from 'src/app/services/cities.service';
import { SaveCityComponent } from './save-city/save-city.component';
import { DeleteCityComponent } from './delete-city/delete-city.component';
import { UpdateCityComponent } from './update-city/update-city.component';
import { Cities } from 'src/app/interface/cities';
import { ShowItemComponent } from './show-item/show-item.component';
export interface Data {
  movies: string;
}

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  public data: Data;
  public rows: any;
  getCitiess;

  constructor(private citiesService: CitiesService, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.citiesService.getCities().subscribe(data => {
      this.getCitiess = data;
      this.rows = data;
    }, err => console.error(err)
    );
  }

  getEvent($event) {
    this.getCities();
  }

  async showModalItem(value) {
    const modal = await this.modalCtrl.create({
      component: ShowItemComponent,
      componentProps: {
        'cities': value
      }
    });
    return await modal.present();
  }

  async showModalSave() {
    const modal = await this.modalCtrl.create({
      component: SaveCityComponent,
      componentProps: {
        'name': 'Save City'
      }
    });
    return await modal.present();
  }

  async showModalDelete(value) {
    const modal = await this.modalCtrl.create({
      component: DeleteCityComponent,
      componentProps: {
        'id': value
      }
    });
    return await modal.present();
  }

  async showModalEdit(value) {
    const modal = await this.modalCtrl.create({
      component: UpdateCityComponent,
      componentProps: {
        'cities': value
      }
    });
    return await modal.present();
  }

}





