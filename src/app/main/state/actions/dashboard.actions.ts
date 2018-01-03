import { Action } from '@ngrx/store';

import { typeCacheUtil } from '@shared/utilities/type-cache.util';

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

export class DashboardReset implements Action {
  readonly type = dashboardActionTypes.DASHBOARD_RESET;
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type UserActions = [
  DashboardSetQuantitOfCharts,
  DashboardReset
];
