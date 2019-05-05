import { Component, OnInit } from '@angular/core';
import { Temperature } from 'src/app/classes/temperature';
import { TEMP } from 'src/app/classes/mock-temp';


@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})

export class TemperatureComponent implements OnInit {

  title = 'Terrarium Sensors';
  temp = TEMP;
  selectedTemp: Temperature;

  constructor() { }

  ngOnInit() {
  }

  onSelect(temperature: Temperature): void {
    this.selectedTemp = temperature;
  }
}
