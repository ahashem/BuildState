import {Build} from "./build.model";
import {Firewall} from "./firewall.model";
import {BuildResultComponent} from "../../state-results/build-result/build-result.component";
import {FirewallResultComponent} from "../../state-results/firewall-result/firewall-result.component";

type DashboardItemType = 'Build' | 'Firewall';

export interface DashboardItemSummary {
  type: DashboardItemType,
}

export interface BuildItemSummary extends DashboardItemSummary {
  type: 'Build',
  new(): Build
}

export interface FirewallItemSummary extends DashboardItemSummary {
  type: 'Firewall',
  new(): Firewall
}

export interface DashboardItem {
  itemType: DashboardItemType,
  itemId:string,
  //itemSummary:
}



/*
export const itemTypesManager: {
  [type: string]: DashboardItem<DashboardItemSummary>
} = {
  Build: BuildItemSummary,
  Firewall: FirewallItemSummary
};*/

