import { Component, } from '@angular/core';
import { ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})

export class VisitsComponent {

  lineChartData: ChartDataset[] = [
    {
      data: [123, 201, 160, 252, 363, 584, 541, 531, 586],
      fill: 'origin',
      label: 'Visiteurs',
      borderColor: 'darkgrey',
      backgroundColor: 'rgba(176,176,176,0.2)',
    },{
      data: [62, 84, 59, 134, 164, 131, 266, 307, 323],
      fill: 'origin',
      label: 'Nombre de nouveaux Clients',
      borderColor: 'chartreuse',
      backgroundColor: 'rgba(235,255,113,0.3)',
    }
  ];

  lineChartLabels: string[] = ['Janvier', 'Février', 'Mars', 'Avriil', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';
}
