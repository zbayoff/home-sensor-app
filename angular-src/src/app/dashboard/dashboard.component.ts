import { Component, OnInit } from '@angular/core';

import { SensorService } from '../sensor.service';
import { SensorData } from '../models/sensorData.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private sensorService: SensorService) { }

  sensorData: SensorData;
  sensorDatas: SensorData[];

  roomDatas: any;

  sensorLocations: string[];

  getRoomData(room) {
    this.sensorService.getRoomData(room).subscribe((data) => {
      console.log('data: ', data);
      this.roomDatas = data;
    });
  }

  getSensorData() {
    this.sensorService.getSensorData().subscribe((data: SensorData[]) => {
      console.log('data: ', data);
      this.sensorDatas = data;
    });
  }

  ngOnInit() {

    // this.getSensorData();
    // this.getRoomData('Garage room');

  }

}
