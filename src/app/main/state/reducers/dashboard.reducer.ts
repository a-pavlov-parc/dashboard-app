import { dashboardActionTypes } from '../actions/dashboard.actions';

export interface IDashboardState {
  quantityOfCharts: number;
}

export const initialDashboardStoreState: IDashboardState = {
  quantityOfCharts: null
};

export function dashboardReducer(state: IDashboardState = initialDashboardStoreState, action): IDashboardState {
  switch (action.type) {
    case dashboardActionTypes.DASHBOARD_SET_QUANTITY_OF_CHARTS: {
      return Object.assign({}, state, {
        quantityOfCharts: action.payload
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
