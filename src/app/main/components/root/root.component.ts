import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IFormValue } from '../form/form.component';
import { DashboardService } from '@main/services/dashboard.service';
import { IChart } from '@main/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  charts$: Observable<IChart> = this.dashboardService.displayedCharts$;

  constructor(private dashboardService: DashboardService) {}

  formSubmitted(value: IFormValue) {
    this.dashboardService.setQuantityOfCharts(value.qtyOfCharts);
  }

  displayMoreCharts() {
    this.dashboardService.displayMoreCharts();
  }
}
