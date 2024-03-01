import { Component } from '@angular/core';

@Component({
  selector: 'app-plugins-on-demand',
  templateUrl: './plugins-on-demand.component.html',
  styleUrls: ['./plugins-on-demand.component.scss']
})
export class PluginsOnDemandComponent {
  constructor() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
