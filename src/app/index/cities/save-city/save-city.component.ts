import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cities } from 'src/app/interface/cities';
import { NavParams, ModalController } from '@ionic/angular';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-save-city',
  templateUrl: './save-city.component.html',
  styleUrls: ['./save-city.component.scss'],
})
export class SaveCityComponent implements OnInit {
  @Input() name: string;

  private citiesForm: FormGroup;

  cities: Cities = {
    id: 0,
    city: '',
    country: '',
    continent: ''
  }

  constructor(private formBuilder: FormBuilder, private citiesService: CitiesService, public modalCtrl: ModalController) {
    this.citiesForm = this.formBuilder.group({
      city: ['', Validators.required],
      country: ['', Validators.required],
      continent: ['', Validators.required],
    });
  }

  public closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  SaveCity() {
    console.log(this.citiesForm.value);
    this.citiesService.saveCity(this.citiesForm.value).subscribe(data => {
      alert('Saved City');
      this.closeModal();
      location.reload();
    });
  }
  ngOnInit(): void {
  }
}