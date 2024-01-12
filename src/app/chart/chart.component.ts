import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: [ './chart.component.css' ]
})
export class ChartComponent {
  title = 'ng2-charts-demo';

  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'SALES', 'MARKETING', 'DESIGN', 'HR', 'LEGAL', 'IT', 'OPS' ],
    datasets: [
      { data: [ 50, 57, 83, 78, 92, 23, 43 ],         
        backgroundColor: ["#FF9500", "#0E5FD9", "#198155", "#E84646", "#0E5FD9", "#FF9500", "#198155"],
         barThickness:5 

    },
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    scales: {
      x: {
        grid: {
          display: false 
        }
      },
      y: {
        grid: {
          display: true,
        }
      }

    }
  };
  data: { Department: string; "Completion %": number; }[];
  chartOptions = [
    { label: 'By percentage', value: 'bar' },
    { label: 'Line Chart', value: 'line' },
  ];

  selectedChart: string = 'bar';
 
  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
 }

}