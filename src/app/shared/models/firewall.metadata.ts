export enum BuildState {
  Pending,
  Running,
  Accepted,
  Rejected
}

export interface MetricsStatistics {
  test: number,
  maintainability: number,
  security: number,
  workmanship: number
}

export interface UnitTestStatistics {
  testsPassed: number,
  testsFailed: number,
  codeCoverage: number
}

export interface FunctionalTestStatistics {
  testsPassed: number,
  testsFailed: number,
  codeCoverage: number
}