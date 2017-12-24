import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styles: []
})
export class DemoComponent  {
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
