import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IFormValue } from '../form/form.component';
import { DashboardService } from '@main/services/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  quantityOfCharts$: Observable<number> = this.dashboardService.quantityOfCharts$;

  constructor(private dashboardService: DashboardService) {}

  formSubmitted(value: IFormValue) {
    this.dashboardService.setQuantityOfCharts(value.qtyOfCharts);
  }
}
