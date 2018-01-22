import produce from 'immer';

import { dashboardActionTypes } from '../actions/dashboard.actions';
import { IChart } from '@main/interfaces';

export interface IDashboardState {
  quantityOfCharts: number;
  allCharts: IChart[];
  displayedCharts: IChart[];
  chartsAreBeingLoaded: boolean;
}

export const initialDashboardStoreState: IDashboardState = {
  quantityOfCharts: null,
  allCharts: [],
  displayedCharts: [],
  chartsAreBeingLoaded: false
};

export function dashboardReducer(state: IDashboardState = initialDashboardStoreState, action): IDashboardState {
  return produce(state, (draft: IDashboardState) => {
    switch (action.type) {
      case dashboardActionTypes.DASHBOARD_SET_QUANTITY_OF_CHARTS: {
        draft.quantityOfCharts = action.payload;

        break;
      }

      case dashboardActionTypes.DASHBOARD_GENERATE_CHARTS: {
        draft.allCharts = action.payload;
        draft.displayedCharts = [];

        break;
      }

      case dashboardActionTypes.DASHBOARD_DISPLAY_MORE_CHARTS: {
        draft.chartsAreBeingLoaded = true;

        break;
      }

      case dashboardActionTypes.DASHBOARD_DISPLAY_MORE_CHARTS_SUCCESS: {
        draft.displayedCharts = [...draft.displayedCharts, ...action.payload];
        draft.chartsAreBeingLoaded = false;

        break;
      }

      case dashboardActionTypes.DASHBOARD_RESET: {
        draft = initialDashboardStoreState;

        break;
      }

      default: {
        return draft;
      }
    }
  });
}
