import { Component } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';

import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {

  id: number;

  LaddleNo: number;

  HeatNo: string;

  AimGrade:string;

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
const HEAT_DATA: PeriodicElement[] = [

  {id:1, LaddleNo: 1 ,HeatNo: 'JSW1361',AimGrade:'JSW1361',planWidth:1234,planThick:1234,plannedStartDate:'24/12/2022',
 
  heatNumber:1234,heatStatus:"Download by Dispatcher"},
 ];

@Component({
  selector: 'app-heatcasting',
  templateUrl: './heatcasting.component.html',
  styleUrls: ['./heatcasting.component.css']
})
export class HeatcastingComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'scheduleId', 'planGrade', 'route','planWidth','planThick',

  'plannedStartDate','heatNumber','heatStatus'];

  dataSource = new MatTableDataSource<PeriodicElement>(HEAT_DATA);

 

  @ViewChild(MatPaginator)

  paginator!: MatPaginator;

 

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;

  }

}


