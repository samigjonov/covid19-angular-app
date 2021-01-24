import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries-statistics',
  templateUrl: './countries-statistics.component.html',
  styleUrls: ['./countries-statistics.component.scss']
})
export class CountriesStatisticsComponent implements OnInit {
  countriesStatistics: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://disease.sh/v3/covid-19/countries').subscribe(data => {
      this.countriesStatistics = data;
    });
  }

}
