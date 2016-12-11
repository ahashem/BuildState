
type DashboardItemState = 'summary' | 'details';

export interface DashboardItem {
  state: DashboardItemState,
}

export interface DashboardItemSummary extends DashboardItem {
  state: 'summary',
}

export interface DashboardItemDetails extends DashboardItem {
  state: 'details',
}

export interface DashboardItemView<TDashboardItem extends DashboardItem> {
  getSummary?(target?: TDashboardItem);
  getDetails?(target?: TDashboardItem);
}

let DashboardSummaryView: DashboardItemView<DashboardItemSummary> = {
  getSummary(){}
};
let DashboardDetailedView: DashboardItemView<DashboardItemSummary> = {
  getDetails(){}
};

export const dashboardViewStrategies: {
  [state: string]: DashboardItemView<DashboardItem>
} = {
  summary: DashboardSummaryView,
  details: DashboardDetailedView
};
