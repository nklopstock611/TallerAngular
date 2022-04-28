import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { SerieService } from './serie.service';
import { dataSeries } from './dataSeries';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  avgSeasons: number = 0;

  constructor(private serieService: SerieService) { }

  getSeriesList(): Array<Serie> {
    return dataSeries;
  }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.calculateAvgSeasons(series);
    })
  }

  ngOnInit() {
    console.log(this.series);
    this.getSeries();
  }

  calculateAvgSeasons(series: Array<Serie>) {
    let sum = 0;
    series.forEach(serie => {
      sum += serie.seasons;
    });
    this.avgSeasons = sum / series.length;
  }

}
