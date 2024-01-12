import { BrowserModule } from
 
'@angular/platform-browser';
import { NgModule } from
 
'@angular/core';
import { CardModule } from
 
'primeng/card';
import { ChartModule } from
 
'primeng/chart';


import { DropdownModule } from 'primeng/dropdown';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';

@NgModule({

  imports: [
    BrowserModule,
    CardModule,
    ChartModule,
    DropdownModule,
    MenubarModule,
    TableModule
    
  ],
})
export class Module { }
