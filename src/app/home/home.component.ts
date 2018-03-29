import { Component, OnInit } from '@angular/core';
import { WheatherReaderService } from '../wheather-reader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results:any;
  country = 'UK';
  city = 'London';
  temparature;
  humidity;
  pressure;

  countries = ['UK', 'LK'];
  cities = ['London', 'Colombo'];

  constructor(private whetherReader: WheatherReaderService ) { }

  ngOnInit() {
    this.whetherReader.getWeather(this.city, this.country).subscribe(
      (data: any) => {
        this.results = data;
       console.log(data);
      }
    );
  }

  getDetails() {
    this.whetherReader.getWeather(this.city, this.country).subscribe(
      (data: any) => {
        this.results = data;
      }
    );

    this.temparature = this.results.main.temp;
    this.humidity = this.results.main.humidity;
    this.pressure = this.results.main.pressure;
  }

}
