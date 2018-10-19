import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mdo-counter',
  template: `
  <a class="gh-count" [class.github-btn-large]="large"
    [href]="counterHref" target="_blank"
    [attr.aria-label]="(count | number) + counterLabel + ' on GitHub'"
    >
    {{ count | number }}
  </a>
  `,
  styles: [`
  .gh-count {
    padding: 2px 5px 2px 4px;
    color: #333;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 3px;
    display: inline-block;
  }
  .gh-count {
    position: relative;
    margin-left: 4px;
    background-color: #fafafa;
    border: 1px solid #d4d4d4;
  }
  .gh-count:hover,
  .gh-count:focus {
    color: #4183C4;
  }
  .gh-count:before,
  .gh-count:after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
  .gh-count:before {
    top: 50%;
    left: -3px;
    margin-top: -4px;
    border-width: 4px 4px 4px 0;
    border-right-color: #fafafa;
  }
  .gh-count:after {
    top: 50%;
    left: -4px;
    z-index: -1;
    margin-top: -5px;
    border-width: 5px 5px 5px 0;
    border-right-color: #d4d4d4;
  }
  .github-btn-large.gh-count {
    padding: 4px 8px 4px 8px;
    font-size: 16px;
    line-height: 22px;
    border-radius: 4px;
    margin-left: 6px;
  }
  .github-btn-large.gh-count:before {
    left: -5px;
    margin-top: -6px;
    border-width: 6px 6px 6px 0;
  }
  .github-btn-large.gh-count:after {
    left: -6px;
    margin-top: -7px;
    border-width: 7px 7px 7px 0;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MdoCounterComponent {
  @Input() large = false;
  @Input() count: number;
  @Input() counterLabel: string;
  @Input() counterHref: string;
}
