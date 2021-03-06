import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { times } from 'lodash';
import * as uuid from 'uuid/v1';

import * as fromDashboardActions from '../actions/dashboard.actions';
import { DashboardService } from '@main/services/dashboard.service';
import { IChart } from '@main/interfaces';
import { heightOfAChart, quantityOfChartsToDisplayPerRow } from '@main/main.constants';

@Injectable()
export class DashboardEffects {
  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService
  ) {}

  @Effect() generateCharts$: Observable<Action> = this.actions$
    .ofType(fromDashboardActions.dashboardActionTypes.DASHBOARD_SET_QUANTITY_OF_CHARTS)
    .switchMap(() => {
      return this.dashboardService.quantityOfCharts$
        .take(1)
        .map((quantityOfCharts: number) => {
          const charts: IChart[] = times(quantityOfCharts, () => {
            return { uuid: uuid() } as IChart;
          });

          return new fromDashboardActions.DashboardGenerateCharts(charts);
        });
    });

  @Effect() displaySomeChartsOnGenerate$: Observable<Action> = this.actions$
    .ofType(fromDashboardActions.dashboardActionTypes.DASHBOARD_GENERATE_CHARTS)
    .switchMap(() => {
      return this.dashboardService.allCharts$
        .take(1)
        .map((charts: IChart[]) => {
          const quantityOfChartsToDisplay = Math.ceil(window.innerHeight / heightOfAChart) * quantityOfChartsToDisplayPerRow;

          return new fromDashboardActions.DashboardDisplayMoreChartsSuccess(charts.slice(0, quantityOfChartsToDisplay));
        });
    });

  @Effect() displayMoreCharts$: Observable<Action> = this.actions$
    .ofType(fromDashboardActions.dashboardActionTypes.DASHBOARD_DISPLAY_MORE_CHARTS)
    .switchMap(() => {
      return Observable.combineLatest(
        this.dashboardService.allCharts$,
        this.dashboardService.displayedCharts$
      )
        .take(1)
        .switchMap(([allCharts, displayedCharts]: IChart[][]) => {
          const quantityOfDisplayedCharts: number = displayedCharts.length;
          const chartsToDisplay: IChart[] = allCharts.slice(quantityOfDisplayedCharts, quantityOfDisplayedCharts + quantityOfChartsToDisplayPerRow);

          return Observable
            .of(new fromDashboardActions.DashboardDisplayMoreChartsSuccess(chartsToDisplay))
            .delay(1000); // emulate http loading...
        });
    });
}
