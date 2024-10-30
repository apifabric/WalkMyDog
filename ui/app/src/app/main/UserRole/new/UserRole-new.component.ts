import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserRole-new',
  templateUrl: './UserRole-new.component.html',
  styleUrls: ['./UserRole-new.component.scss']
})
export class UserRoleNewComponent {
  @ViewChild("UserRoleForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}