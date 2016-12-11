import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DashboardItemSummary, DashboardItem} from "../shared/models/build-dashboard.metadata";
import {MOCK_ITEMS} from "../shared/mock-data/mock-build-dashboard";
import {FirewallBuildState} from "../shared/models/firewall.metadata";
import {BuildBuildState} from "../shared/models/build.metadata";
import {stat} from "fs";

@Component({
  selector: 'app-build-dashboard',
  templateUrl: './build-dashboard.component.html',
  styleUrls: ['build-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BuildDashboardComponent implements OnInit {

  protected dashboardItems: any[] = MOCK_ITEMS;  //TODO: get from service

  constructor() {
  }

  ngOnInit() {
  }

  getItemState(state: FirewallBuildState | BuildBuildState): string {

    switch (state) {
      case <FirewallBuildState>state:
        return FirewallBuildState[state];

      case <BuildBuildState>state:
        return FirewallBuildState[state];

      default:
        return '';
    }
  }
}
