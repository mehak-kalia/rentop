import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class DataService {

 constructor() { }

 getData() {
    return [
      {"Department": "Department A", "Completion %": 50},
      {"Department": "Department B", "Completion %": 57},
      {"Department": "Department C", "Completion %": 83},
      {"Department": "Department D", "Completion %": 78},
      {"Department": "Department E", "Completion %": 92}
    ];
 }
}