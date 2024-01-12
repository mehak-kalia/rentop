import { Component } from '@angular/core';

import {MenuItem} from 'primeng/api';

export interface Data {
  userId: number;
  userName: string;
  totalEnrolments: number;
  yetToStart: number;
  inProgress: number;
  completed: number;
  progressPercentage: number;
  averageProgress: string;
  averageSpendTime: string;
  [key: string]: any;
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeTab: string = 'report';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
 items: MenuItem[] |any ;

  ngOnInit() {
      this.items = [
          {
              label: 'Report',

              
          },
          {
              label: 'User Progress',

          }
      ];
  }
  selectedItem: any;

  onItemClick(event: any, item: any) {
    this.selectedItem = item;
  }
  data: Data[]= [
    {userId: 1, userName: 'User 1', totalEnrolments: 1000, yetToStart: 500, inProgress: 250, completed: 250, progressPercentage: 75, averageProgress: '42 Min', averageSpendTime: '25 Hour'},
    {userId: 2, userName: 'User 2', totalEnrolments: 1500, yetToStart: 750, inProgress: 500, completed: 250, progressPercentage: 75, averageProgress: '42 Min', averageSpendTime: '25 Hour'},
 ];

 columns = [
    {field: 'userName', header: 'User Name'},
    {field: 'totalEnrolments', header: 'Total Enrolments'},
    {field: 'yetToStart', header: 'Yet to Start'},
    {field: 'inProgress', header: 'In Progress'},
    {field: 'completed', header: 'Completed'},
    {field: 'progressPercentage', header: 'Progress Percentage'},
    {field: 'averageProgress', header: 'Average Progress'},
    {field: 'averageSpendTime', header: 'Average Spend Time'},
 ];
}
