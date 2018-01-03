import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as dashboardActions from '../state/actions/dashboard.actions';
import * as fromMainModuleState from '../state';
import { IChart } from '@main/interfaces';

@Injectable()
export class DashboardService {
  quantityOfCharts$: Observable<number> = this.store.select(fromMainModuleState.getQuantityOfCharts);
  allCharts$: Observable<IChart[]> = this.store.select(fromMainModuleState.getAllCharts);
  displayedCharts$: Observable<IChart[]> = this.store.select(fromMainModuleState.getDisplayedCharts);

  constructor(private store: Store<fromMainModuleState.MainModuleState>) {}

  setQuantityOfCharts(quantity: number) {
    this.store.dispatch(new dashboardActions.DashboardSetQuantitOfCharts(quantity));
  }

  displayMoreCharts() {
    this.store.dispatch(new dashboardActions.DashboardDisplayMoreCharts());
  }

  reset() {
    this.store.dispatch(new dashboardActions.DashboardReset());
  }
}
