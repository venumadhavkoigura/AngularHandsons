import { Component, OnInit } from '@angular/core';
import { addressModel } from '../data/address.model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  countryData: any[] = ['India', 'US', 'UK'];

  model: addressModel = {
    address: '',
    city: '',
    state: '',
    postcode: null,
    country: null,
    aggrement: false,
  };

  constructor() {}

  ngOnInit(): void {}

  onFormSubmit() {
    console.log('Full Address', this.model);
  }
}
