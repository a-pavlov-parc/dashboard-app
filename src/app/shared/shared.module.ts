import { NgModule } from '@angular/core';

import { SpinnerComponent } from './components/spinner/spinner.component';

const declarations = [SpinnerComponent];

@NgModule({
  declarations,
  exports: declarations
})
export class SharedModule {}
