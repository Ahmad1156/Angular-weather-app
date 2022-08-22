import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Weather-app';
  weatherData!:WeatherData;
  number!:number;
  CityName:string='Lebanon';
  constructor(private weatherService:WeatherService) {

  }
  KtoC(number:number):number{
    return this.number = (number -273);
  }
 getCityName(CityName:string) {
    this.CityName=CityName;
    this.getWeatherdata(CityName);
 }
  ngOnInit(): void {
    this.getWeatherdata(this.CityName);
  }
  private getWeatherdata(CityName:string) {
    this.weatherService.getWeatherData(CityName)
     .subscribe({
      next:(response:any)=>{
        this.weatherData=response;
      }
     })
    }
}
