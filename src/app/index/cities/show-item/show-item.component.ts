import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cities } from 'src/app/interface/cities';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
})
export class ShowItemComponent implements OnInit {
  @Input() cities: Cities = {
    id: 0,
    city: '',
    country: '',
    continent: ''
  }

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() { }

  public closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
