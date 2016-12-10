import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Ng2BootstrapModule} from "ng2-bootstrap";
import {ChartsModule} from "ng2-charts/ng2-charts";
import { BuildDashboardComponent } from './build-dashboard/build-dashboard.component';
import { MetricsStatsComponent } from './state-details/metrics-stats/metrics-stats.component';
import { BuildStatsComponent } from './state-details/build-stats/build-stats.component';
import { UnitTestStatsComponent } from './state-details/unit-test-stats/unit-test-stats.component';
import { FunctionalTestStatsComponent } from './state-details/functional-test-stats/functional-test-stats.component';
import { FirewallResultComponent } from './state-results/firewall-result/firewall-result.component';
import { BuildResultComponent } from './state-results/build-result/build-result.component';
import { DashboardItemDetailsComponent } from './state-details/item-state-details/dashboard-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildDashboardComponent,
    MetricsStatsComponent,
    BuildStatsComponent,
    UnitTestStatsComponent,
    FunctionalTestStatsComponent,
    FirewallResultComponent,
    BuildResultComponent,
    DashboardItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
