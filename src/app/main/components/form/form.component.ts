import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface IFormValue {
  qtyOfCharts: number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() formSubmitted: EventEmitter<IFormValue> = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      qtyOfCharts: [null, Validators.compose([Validators.required, Validators.min(1)])]
    });
  }

  submitTheForm() {
    if (this.form.valid) {
      this.formSubmitted.emit(this.form.value as IFormValue);
    }
  }
}
