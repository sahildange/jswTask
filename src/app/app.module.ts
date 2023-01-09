import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DispatcherplanningComponent } from './dispatcherplanning/dispatcherplanning.component';
import { ConverterComponent } from './converter/converter.component';
import { CasterentryComponent } from './casterentry/casterentry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlannedscheduleComponent } from './plannedschedule/plannedschedule.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { HeatcastingComponent } from './heatcasting/heatcasting.component';



@NgModule({
  declarations: [
    AppComponent,
    DispatcherplanningComponent,
    ConverterComponent,
    CasterentryComponent,
    PlannedscheduleComponent,
    HeatcastingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
