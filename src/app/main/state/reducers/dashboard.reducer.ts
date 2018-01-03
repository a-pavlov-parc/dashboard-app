import { dashboardActionTypes } from '../actions/dashboard.actions';
import { IChart } from '@main/interfaces';

export interface IDashboardState {
  quantityOfCharts: number;
  allCharts: IChart[];
  displayedCharts: IChart[];
}

export const initialDashboardStoreState: IDashboardState = {
  quantityOfCharts: null,
  allCharts: [],
  displayedCharts: []
};

export function dashboardReducer(state: IDashboardState = initialDashboardStoreState, action): IDashboardState {
  switch (action.type) {
    case dashboardActionTypes.DASHBOARD_SET_QUANTITY_OF_CHARTS: {
      return Object.assign({}, state, {
        quantityOfCharts: action.payload
      });
    }

    case dashboardActionTypes.DASHBOARD_GENERATE_CHARTS: {
      return Object.assign({}, state, {
        allCharts: action.payload,
        displayedCharts: []
      });
    }

    case dashboardActionTypes.DASHBOARD_DISPLAY_MORE_CHARTS_SUCCESS: {
      return Object.assign({}, state, {
        displayedCharts: [...state.displayedCharts, ...action.payload]
      });
    }

    case dashboardActionTypes.DASHBOARD_RESET: {
      return initialDashboardStoreState;
    }

    default: {
      return state;
    }
  }
}
