import { Component, Input } from '@angular/core';

@Component({
  selector: 'ntkme-counter',
  template: `
  <a class="social-count" [class.gh-large]="large" [href]="counterHref"
    [attr.aria-label]="(count | number) + counterLabel + ' on GitHub'">
    <span>{{ count | number }}</span>
  </a>
  `,
  styles: [`
  a {
    color: #24292e;
    text-decoration: none;
    outline: 0;
  }
  .social-count {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    user-select: none;
    display: inline-block;
    font-weight: 600;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid #d1d2d3;
    border-top-right-radius: 0.25em;
    border-bottom-right-radius: 0.25em;
    border-left: 0;
    position: relative;
    background-color: #fff;
    font-size: 10px;
    height: 20px;
    padding: 0 5px;
    line-height: 18px;
  }
  .social-count:hover {
    color: #0366d6;
  }
  .social-count:focus {
    border-color: #c8e1ff;
  }
  .gh-large.social-count {
    padding: 0 10px;
    font-size: 11px;
    height: 28px;
    line-height: 26px;
  }
  .gh-large.social-count span {
    vertical-align: 0;
  }
  `],
})
export class NtkmeCounterComponent {
  @Input() large = false;
  @Input() count: number;
  @Input() counterLabel: string;
  @Input() counterHref: string;
}
