import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'ntkme-counter',
  template: `
  <a class="social-count" [class.gh-large]="large" [href]="counterHref"
    [attr.aria-label]="(count | number) + counterLabel + ' on GitHub'">
    <b></b>
    <i></i>
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
    border-radius: 0.25em;
    position: relative;
    background-color: #fff;
    margin-left: 5px;
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
  .social-count b,
  .social-count i {
    position: absolute;
    top: 50%;
    right: 100%;
    display: block;
    width: 0;
    height: 0;
    margin-top: -4px;
    border: 4px solid transparent;
  }
  .gh-large.social-count b,
  .gh-large.social-count i {
    margin-top: -6px;
    border-width: 6px;
  }
  .social-count b {
    margin-right: 0;
    border-right-color: #d1d2d3;
  }
  .social-count:focus b {
    border-right-color: #c8e1ff;
  }
  .social-count i {
    margin-right: -1px;
    border-right-color: #fff;
  }
  .gh-large.social-count {
    padding: 0 7px;
    margin-left: 7px;
    font-size: 11px;
    height: 28px;
    line-height: 26px;
  }
  .gh-large.social-count span {
    vertical-align: 0;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class NtkmeCounterComponent {
  @Input() large = false;
  @Input() count: number;
  @Input() counterLabel: string;
  @Input() counterHref: string;
}
