import { Component, Input } from '@angular/core';

import { heightOfAChart } from '@main/main.constants';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  @Input() color: string;

  heightOfAChart: number = heightOfAChart;
}
