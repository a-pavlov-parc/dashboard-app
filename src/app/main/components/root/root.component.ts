import { Component } from '@angular/core';

import { IFormValue } from '../form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  formSubmitted(value: IFormValue) {
    console.log(value);
  }
}
