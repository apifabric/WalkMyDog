import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SystemLog-new',
  templateUrl: './SystemLog-new.component.html',
  styleUrls: ['./SystemLog-new.component.scss']
})
export class SystemLogNewComponent {
  @ViewChild("SystemLogForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}