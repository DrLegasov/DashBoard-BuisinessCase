import { Component, } from '@angular/core';
import { ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})

export class CartsComponent {

  lineChartData: ChartDataset[] = [
    {
      data: [25, 31, 38, 58, 46, 29, 28, 49, 57],
      label: 'Valeur du panier moyen',
      borderColor: 'yellow',
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
