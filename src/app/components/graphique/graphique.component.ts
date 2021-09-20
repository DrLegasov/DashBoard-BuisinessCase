import { Component,Input,OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.css']
})
export class GraphiqueComponent implements OnInit {

  type: ChartType;

  datasets: ChartDataset[];
  options: ChartOptions;

  @Input() nbBleu: number;
  @Input() nbBlanc: number;


  constructor() {

  }

  ngOnInit(): void {
    this.type = 'doughnut';

    this.datasets = [
      {
        label: 'Dataset 1',
        data: [this.nbBleu, this.nbBlanc],
        backgroundColor: ['#01937C', '#FDE2C2'],
      }
    ];

    this.options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        }
      }
    };
  }
}














