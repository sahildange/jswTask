import { Component } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';

import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {

  id: number;

  scheduleId: number;

  planGrade: string;

  route:string;

  planWidth: number;

  planThick:number;

  plannedStartDate:string;

  heatNumber: number;

  heatStatus:string;

  // name: string;

  // position: number;

  // weight: number;

  // symbol: string;

}

const ELEMENT_DATA: PeriodicElement[] = [

  {id:1, scheduleId: 1 ,planGrade: 'SAH123',route:'',planWidth:1234,planThick:1234,plannedStartDate:'06/01/2023',
 
  heatNumber:1234,heatStatus:"Download by Dispatcher"},
 
  {id:1, scheduleId: 1 ,planGrade: 'SAH123',route:'',planWidth:1234,planThick:1234,plannedStartDate:'06/01/2023',
 
  heatNumber:1234,heatStatus:"Download by Dispatcher"},
 
  {id:1, scheduleId: 1 ,planGrade: 'SAH123',route:'',planWidth:1234,planThick:1234,plannedStartDate:'06/01/2023',
 
  heatNumber:1234,heatStatus:"Download by Dispatcher"},
 
  {id:1, scheduleId: 1 ,planGrade: 'SAH123',route:'',planWidth:1234,planThick:1234,plannedStartDate:'06/01/2023',
 
  heatNumber:1234,heatStatus:"Download by Dispatcher"},
 
  {id:1, scheduleId: 1 ,planGrade: 'SAH123',route:'',planWidth:1234,planThick:1234,plannedStartDate:'06/01/2023',
 
  heatNumber:1234,heatStatus:"Download by Dispatcher"},
 
  {id:1, scheduleId: 1 ,planGrade: 'SAH123',route:'',planWidth:1234,planThick:1234,plannedStartDate:'06/01/2023',
 
  heatNumber:1234,heatStatus:"Download by Dispatcher"},
 
  
 
 ];

@Component({
  selector: 'app-plannedschedule',
  templateUrl: './plannedschedule.component.html',
  styleUrls: ['./plannedschedule.component.css']
})
export class PlannedscheduleComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'scheduleId', 'planGrade', 'route','planWidth','planThick',

  'plannedStartDate','heatNumber','heatStatus'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

 

  @ViewChild(MatPaginator)

  paginator!: MatPaginator;

 

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;

  }

}

 




 
 