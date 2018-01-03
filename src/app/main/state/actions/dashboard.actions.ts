import { Action } from '@ngrx/store';

import { typeCacheUtil } from '@shared/utilities/type-cache.util';
import { IChart } from '@main/interfaces';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const dashboardActionTypes = {
  DASHBOARD_SET_QUANTITY_OF_CHARTS: typeCacheUtil('[Dashboard] Set quantity of charts'),
  DASHBOARD_GENERATE_CHARTS: typeCacheUtil('[Dashboard] Generate charts'),
  DASHBOARD_DISPLAY_MORE_CHARTS: typeCacheUtil('[Dashboard] Display more charts'),
  DASHBOARD_DISPLAY_MORE_CHARTS_SUCCESS: typeCacheUtil('[Dashboard] Display more charts success'),
  DASHBOARD_RESET: typeCacheUtil('[Dashboard] Reset')
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */

export class DashboardSetQuantitOfCharts implements Action {
  readonly type = dashboardActionTypes.DASHBOARD_SET_QUANTITY_OF_CHARTS;

  constructor(public payload: number) {}
}

export class DashboardGenerateCharts implements Action {
  readonly type = dashboardActionTypes.DASHBOARD_GENERATE_CHARTS;

  constructor(public payload: IChart[]) {}
}

export class DashboardDisplayMoreCharts implements Action {
  readonly type = dashboardActionTypes.DASHBOARD_DISPLAY_MORE_CHARTS;
}

export class DashboardDisplayMoreChartsSuccess implements Action {
  readonly type = dashboardActionTypes.DASHBOARD_DISPLAY_MORE_CHARTS_SUCCESS;

  constructor(public payload: IChart[]) {}
}

export class DashboardReset implements Action {
  readonly type = dashboardActionTypes.DASHBOARD_RESET;
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type DashboardActions = [
  DashboardSetQuantitOfCharts,
  DashboardGenerateCharts,
  DashboardDisplayMoreCharts,
  DashboardDisplayMoreChartsSuccess,
  DashboardReset
];
