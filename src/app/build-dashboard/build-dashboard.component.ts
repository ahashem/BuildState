import { Component, OnInit } from '@angular/core';
import {DashboardItemSummary, DashboardItem} from "../shared/models/build-dashboard.metadata";
import {MOCK_ITEMS} from "../shared/mock-data/mock-build-dashboard";

@Component({
  selector: 'app-build-dashboard',
  templateUrl: './build-dashboard.component.html',
  styleUrls: ['build-dashboard.component.scss']
})
export class BuildDashboardComponent implements OnInit {

  protected dashboardItems:any[] = MOCK_ITEMS;  //TODO: get from service

  constructor() { }

  ngOnInit() {
  }

}
