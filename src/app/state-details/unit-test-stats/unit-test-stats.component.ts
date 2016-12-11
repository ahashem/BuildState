import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-unit-test-stats',
  templateUrl: './unit-test-stats.component.html',
  styleUrls: ['unit-test-stats.component.scss']
})
export class UnitTestStatsComponent implements OnInit {
  public pieChartLabels: string[] = ['Test Failed', 'Test Passed'];
  public pieChartData: number[] = [35, 142];
  /*public pieChartData: any[] = [{
    value: 35,
    label: '35'
  },
    {
      value: 142,
      label: '142'
    }];*/
  public pieChartType: string = 'pie';
  public chartOptions: any = {
    fullWidth: false,
    legend: {
      display: false,
    }
  };


  constructor() {
  }

  ngOnInit() {
  }

  // events
  public chartClicked(e: any): void {
    //console.log(e);
  }

  public chartHovered(e: any): void {
    //console.log(e);
  }
}
