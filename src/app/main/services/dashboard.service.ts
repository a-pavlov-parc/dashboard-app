import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as dashboardActions from '../state/actions/dashboard.actions';
import * as fromMainModuleState from '../state';

@Injectable()
export class DashboardService {
  quantityOfCharts$: Store<number> = this.store.select(fromMainModuleState.getQuantityOfCharts);

  constructor(private store: Store<fromMainModuleState.MainModuleState>) {}

  setQuantityOfCharts(quantity: number) {
    this.store.dispatch(new dashboardActions.DashboardSetQuantitOfCharts(quantity));
  }

  reset() {
    this.store.dispatch(new dashboardActions.DashboardReset());
  }
}
