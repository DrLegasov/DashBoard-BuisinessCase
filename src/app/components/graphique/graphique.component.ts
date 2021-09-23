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
  @Input() nbRouge: number;
  @Input() nbJaune: number;
  @Input() nbVert: number;
  @Input() nbAzure: number;
  @Input() nbCyan: number;



  constructor() {

  }

  ngOnInit(): void {
    this.type = 'doughnut';

    this.datasets = [
      {
        label: 'Dataset 1',
        data: [this.nbBleu, this.nbBlanc, this.nbRouge, this.nbJaune, this.nbAzure, this.nbCyan, this.nbVert],
        backgroundColor: ['#01937C', '#FDE2C2', '#ffdddd', '#feffdd','#03b3f5', '#0334f5', '#04d004'],
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














