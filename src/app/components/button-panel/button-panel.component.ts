import {Component, Input} from '@angular/core';
import {DEFAULT_CITIES} from '../../../models/DefaultCities';

@Component({
  selector: 'app-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.css']
})
export class ButtonPanelComponent {
  public cities = DEFAULT_CITIES;
  @Input() currentCity: string;

  constructor() {
  }

}
