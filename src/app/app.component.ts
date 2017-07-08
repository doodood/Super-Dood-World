import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'U15 Dood';
  tiles = [
    {text: 'Joueurs', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Matchs', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Club', cols: 1, rows: 5, color: 'lightpink'},
    {text: 'Coach', cols: 2, rows: 3, color: '#DDBDF1'},
    {text: 'Arbitrage', cols: 1, rows: 3, color: 'green'},
    {text: 'Table de marque', cols: 1, rows: 2, color: 'red'},
    {text: 'Gouter', cols: 2, rows: 2, color: 'orange'},
    {text: 'News', cols: 1, rows: 2, color: 'navy'}
  ];

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}
