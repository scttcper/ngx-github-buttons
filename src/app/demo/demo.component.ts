import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent {
  style = 'ntkme';
  type = 'star' as any;
  size = 'none' as any;
  user = '';
  repo = '';
  count = false;
  standardIcon = false;
  changeSize() {
    this.size = this.size === 'none' ? 'large' : 'none';
  }
}
