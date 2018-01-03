import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// components
import { RootComponent } from './components/root/root.component';
import { FormComponent } from './components/form/form.component';

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
  ],
  declarations: [
    RootComponent,
    FormComponent
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class MainModule {}
