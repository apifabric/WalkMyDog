import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'WalkRequest-new',
  templateUrl: './WalkRequest-new.component.html',
  styleUrls: ['./WalkRequest-new.component.scss']
})
export class WalkRequestNewComponent {
  @ViewChild("WalkRequestForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}