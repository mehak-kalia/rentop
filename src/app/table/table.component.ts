import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  data;
  cols = [
     { field: 'Department', header: 'Department' },
     { field: 'Completion %', header: 'Completion %' }
  ];
  chartOptions = [
    { label: 'Bar Chart', value: 'bar' },
    { label: 'Line Chart', value: 'line' },
  ];

  selectedChart: string = 'bar';
 
  constructor(private dataService: DataService) {
     this.data = this.dataService.getData();
  }

}
