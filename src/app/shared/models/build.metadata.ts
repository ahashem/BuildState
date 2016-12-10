export enum BuildState {
  Pending,
  Running,
  Succeed,
  Failed
}

export interface Statistics {
  overallState: boolean, //pass - fail
}

export interface MetricsStatistics extends Statistics{
  test: number,
  maintainability: number,
  security: number,
  workmanship: number
}

export interface BuildStatistics extends Statistics {

}

export interface UnitTestStatistics extends Statistics{
  testsPassed: number,
  testsFailed: number,
  codeCoverage: number,
}

export interface FunctionalTestStatistics extends Statistics{
  testsPassed: number,
  testsFailed: number,
  codeCoverage: number,
  overallState: boolean, //pass - fail
}