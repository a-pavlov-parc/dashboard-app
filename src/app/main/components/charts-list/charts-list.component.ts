import { Component, Input } from '@angular/core';

import { IChart } from '@main/interfaces';

@Component({
  selector: 'app-charts-list',
  templateUrl: './charts-list.component.html',
  styleUrls: ['./charts-list.component.css']
})
export class ChartsListComponent {
  @Input() charts: IChart[];
  colors: string[] = ['aliceblue', 'skyblue', 'blue', 'black', 'sienna', 'slateblue', 'rebeccapurple'];
}
