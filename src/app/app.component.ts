import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  style = 'mdo';
  type = 'follow';
  size = 'none';
  user = '';
  repo = '';
  count = false;
  changeSize() {
    this.size = this.size === 'none' ? 'large' : 'none';
  }
}
