import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  style = 'ntkme';
  type = 'star';
  size = 'none';
  user = '';
  repo = '';
  count = false;
  standardIcon = false;
  changeSize() {
    this.size = this.size === 'none' ? 'large' : 'none';
  }
}
