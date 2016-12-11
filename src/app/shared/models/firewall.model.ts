import { FunctionalTestStatistics, UnitTestStatistics, BuildStatistics, MetricsStatistics } from "./detailed-statistics.metadata";
import {FirewallBuildState} from "./firewall.metadata";

export class Firewall {

  constructor(protected id: string,
              public displayName: string,
              public state: FirewallBuildState,
              public owner?: string,
              public timeStarted?: string, //Date Time
              public metricsStats?:MetricsStatistics,
              public buildStats?:BuildStatistics,
              public unitTestStats?:UnitTestStatistics,
              public functionalTestStats?:FunctionalTestStatistics
  ) {}

  public getSummary(){
    return {
      displayName: this.displayName,
      state: this.state,
      owner: this.owner? this.owner : '',
      timeStarted: this.timeStarted? this.timeStarted : '',
      metricsStatsSummary: this.metricsStats? this.metricsStats.overallState : false,
      buildStatsSummary: this.buildStats? this.buildStats.overallState : false,
      unitTestStatsSummary: this.unitTestStats? this.unitTestStats.overallState : false,
      functionalTestStatsSummary: this.functionalTestStats? this.functionalTestStats.overallState : false,
    }
  }
}
