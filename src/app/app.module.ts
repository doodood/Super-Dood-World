import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdCardModule} from "@angular/material";
import {MdButtonModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import { ChartModule } from '../../node_modules/angular2-chartjs';
import { ChartsModule } from 'ng2-charts';



import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    MdCardModule, MdButtonModule, MdIconModule,MdToolbarModule,MdGridListModule,
    BrowserAnimationsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
