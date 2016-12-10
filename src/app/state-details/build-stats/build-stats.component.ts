import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-build-stats',
  templateUrl: './build-stats.component.html',
  styleUrls: ['build-stats.component.scss']
})
export class BuildStatsComponent implements OnInit {
  @Input() buildOverallState: boolean; // success - fail
  @Input() buildMetadata: {time: string, date: string};     // time & date

  constructor() { }

  ngOnInit() {
  }

}
