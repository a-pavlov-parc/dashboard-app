import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// modules
import { SharedModule } from '@shared/shared.module';

// rxjs operators
import './operators';

// components
import { RootComponent } from './components/root/root.component';
import { FormComponent } from './components/form/form.component';
import { ChartsListComponent } from './components/charts-list/charts-list.component';
import { ChartComponent } from './components/chart/chart.component';

// providers
import { DashboardService } from './services/dashboard.service';

// ngrx related things
import { DashboardEffects } from './state/effects/dashboard.effects';
import { mainModuleReducers, mainModuleInitialState } from './state';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(mainModuleReducers, {
      initialState: mainModuleInitialState
    }),
    EffectsModule.forRoot([DashboardEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    InfiniteScrollModule,
    SharedModule
  ],
  declarations: [
    RootComponent,
    FormComponent,
    ChartsListComponent,
    ChartComponent
  ],
  providers: [DashboardService],
  bootstrap: [RootComponent]
})
export class MainModule {}
