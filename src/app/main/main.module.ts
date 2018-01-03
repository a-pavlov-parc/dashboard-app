import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RootComponent } from './components/root/root.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    RootComponent,
    FormComponent
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class MainModule {}
