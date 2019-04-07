import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private http: HttpClient) { }

  getSensorData() {
    return this.http.get('/api/sensorData');
  }

  getRoomData(room) {
    return this.http.get('/api/sensorData/' + room);
  }


}
