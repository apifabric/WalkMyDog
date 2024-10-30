import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'WalkerRate-new',
  templateUrl: './WalkerRate-new.component.html',
  styleUrls: ['./WalkerRate-new.component.scss']
})
export class WalkerRateNewComponent {
  @ViewChild("WalkerRateForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}