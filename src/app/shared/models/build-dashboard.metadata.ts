
type DashboardItemType = 'summary' | 'details';


export interface DashboardItem {
  type: DashboardItemType,
}

export interface DashboardItemSummary extends DashboardItem {
  type: 'summary',
}

export interface DashboardItemDetails extends DashboardItem {
  type: 'details',
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

let strategies: {
  [type: string]: DashboardItemView<DashboardItem>
} = {
  summary: DashboardSummaryView,
  details: DashboardDetailedView
};
