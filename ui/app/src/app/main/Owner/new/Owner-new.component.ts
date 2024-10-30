import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Owner-new',
  templateUrl: './Owner-new.component.html',
  styleUrls: ['./Owner-new.component.scss']
})
export class OwnerNewComponent {
  @ViewChild("OwnerForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}