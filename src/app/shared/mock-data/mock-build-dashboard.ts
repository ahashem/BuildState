import {FirewallBuildState} from "../models/firewall.metadata";
import {BuildBuildState} from "../models/build.metadata";
export const MOCK_ITEMS: any[] = [
  {
    type: 'Build',
    displayName:'Tenrox R1_1235',
    state: BuildBuildState.Pending,
    owner: '',
    timeStarted:''
  },
  {
    type: 'Firewall',
    displayName:'432462',
    state: FirewallBuildState.Running,
    owner: 'jtuck',
    timeStarted:'4/18/2014 12:12pm'
  },
  {
    type: 'Firewall',
    displayName:'432461',
    state: FirewallBuildState.Rejected,
    owner: 'samy',
    timeStarted:'4/18/2014 10:53am',
    metricsStatsSummary: false,
    buildStatsSummary: true,
    unitTestStatsSummary: true,
    functionalTestStatsSummary:true,
  },
  {
    type: 'Build',
    displayName:'Tenrox-R1- 1234',
    state: BuildBuildState.Succeed,
    timeStarted:'4/17/201 4 9:42am',
    metricsStatsSummary: true,
    buildStatsSummary: true,
    unitTestStatsSummary: true,
    functionalTestStatsSummary:true,
  },
  {
    type: 'Firewall',
    displayName:'432460',
    state: FirewallBuildState.Rejected,
    owner: 'samy',
    timeStarted:'4/17/2014 7:51am',
    metricsStatsSummary: false
  },
  {
    type: 'Firewall',
    displayName:'432459',
    state: FirewallBuildState.Accepted,
    owner: 'samy',
    timeStarted:'4/16/2014 6:43am',
    metricsStatsSummary: true,
    buildStatsSummary: true,
    unitTestStatsSummary: true,
    functionalTestStatsSummary:true,
  },
];