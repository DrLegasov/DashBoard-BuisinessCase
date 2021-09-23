import { Component, } from '@angular/core';
import { ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-new-customers',
  templateUrl: './new-customers.component.html',
  styleUrls: ['./new-customers.component.css']
})

export class NewCustomersComponent {

  lineChartData: ChartDataset[] = [
    {
      data: [62, 84, 59, 134, 164, 131, 266, 307, 323],
      label: 'Nombre de Commandes',
      borderColor: 'chartreuse',
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
