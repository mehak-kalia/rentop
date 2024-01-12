import { BrowserModule } from
 
'@angular/platform-browser';
import { NgModule } from
 
'@angular/core';
import { CardModule } from
 
'primeng/card';
import { NgChartsModule } from
 
'ng2-charts';

import { AppComponent } from
 
'./app.component';
import { DropdownModule } from 'primeng/dropdown';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TableComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    DropdownModule,
    MenubarModule,
    TableModule,
    NgChartsModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
