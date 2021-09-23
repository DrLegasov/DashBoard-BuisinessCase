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
      label: 'Visiteurs',
      borderColor: 'darkgrey',
      backgroundColor: 'rgba(235,255,113,1)',
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
