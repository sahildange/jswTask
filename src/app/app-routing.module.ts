import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasterentryComponent } from './casterentry/casterentry.component';
import { ConverterComponent } from './converter/converter.component';
import { DispatcherplanningComponent } from './dispatcherplanning/dispatcherplanning.component';

const routes: Routes = [
  {
    path:'DispatcherPlanning',
    component:DispatcherplanningComponent
  },
  {
    path:'CasterEntry',
    component:CasterentryComponent
  },
  {
    path:'Converter',
    component:ConverterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
