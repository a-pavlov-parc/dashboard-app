import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import * as fromDashboardActions from '../actions/dashboard.actions';

@Injectable()
export class DashboardEffects {
    constructor(
        private actions$: Actions
    ) {}

    /*@Effect() authReset$: Observable<Action> = this.actions$
        .ofType(fromAuthActions.authActionTypes.AUTH_RESET)
        .map(() => new fromUserActions.UserReset());*/
}
