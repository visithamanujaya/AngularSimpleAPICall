import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/operator/map';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';



@Injectable()
export class WheatherReaderService {

  getUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
  apiKey = '264909e3ff6c57c880b1a559d54c50c7';

  constructor(private http: HttpClient) { }
  getWeather(city, country): any {
    this.getUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    this.apiKey = '264909e3ff6c57c880b1a559d54c50c7';
    this.getUrl = this.getUrl + city + ',' + country + '&appid=' + this.apiKey;
    return this.http.get(this.getUrl);
  }

}
