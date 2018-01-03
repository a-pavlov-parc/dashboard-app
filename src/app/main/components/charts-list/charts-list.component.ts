import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IChart } from '@main/interfaces';

@Component({
  selector: 'app-charts-list',
  templateUrl: './charts-list.component.html',
  styleUrls: ['./charts-list.component.css']
})
export class ChartsListComponent {
  @Input() charts: IChart[];
  @Input() chartsAreBeingLoaded: boolean;
  @Input() thereIsTheNextPage: boolean;
  @Output() displayMoreCharts: EventEmitter<void> = new EventEmitter();

  colors: string[] = ['aliceblue', 'skyblue', 'blue', 'black', 'sienna', 'slateblue', 'rebeccapurple'];

  itemTrackByUuid(index: number, chart: IChart) {
    return chart.uuid;
  }
}
