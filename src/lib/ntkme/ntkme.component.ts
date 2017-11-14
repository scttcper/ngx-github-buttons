/* tslint:disable:max-line-length */
import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'ntkme-github-button',
  template: `
  <div class="large" style="">
    <a [href]="buttonHref" class="btn" aria-label="Star scttcper/ngx-toastr on GitHub">

      <svg *ngIf="type === 'follow'" version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-mark-github" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>


      <svg *ngIf="type === 'watch'" version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-eye" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>

      <svg *ngIf="type === 'star'" version="1.1" width="14" height="16" viewBox="0 0 14 16" class="octicon octicon-star" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>

      <span> Star</span>
    </a>
    <a href="https://github.com/scttcper/ngx-toastr/stargazers" *ngIf="count && loaded" class="social-count" aria-label="246 stargazers on GitHub">
      <b></b>
      <i></i>
      <span>{{ counter | number }}</span>
    </a>
  </div>
  `,
  styles: [`
  a {
    color: #24292e;
    text-decoration: none;
    outline: 0;
  }
  .btn,
  .social-count {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
      Arial, sans-serif;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: inline-block;
    font-weight: 600;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid #d1d2d3;
    border-radius: 0.25em;
  }
  .btn:focus,
  .social-count:focus {
    border-color: #c8e1ff;
  }
  .btn {
    background-color: #eff3f6;
    background-image: -webkit-linear-gradient(top, #fafbfc, #e4ebf0);
    background-image: -moz-linear-gradient(top, #fafbfc, #e4ebf0);
    background-image: linear-gradient(to bottom, #fafbfc, #e4ebf0);
    background-repeat: repeat-x;
    background-size: 110% 110%;
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFAFBFC', endColorstr='#FFE4EBF0')";
    *filter: progid:DXImageTransform.Microsoft.gradient(
        startColorstr='#FFFAFBFC',
        endColorstr='#FFE4EBF0'
      );
  }
  .btn:active {
    background-color: #e9ecef;
    background-image: none;
    border-color: #afb1b2;
    box-shadow: inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15);
  }
  .btn:hover {
    background-color: #e6ebf1;
    background-image: -webkit-linear-gradient(top, #f0f3f6, #dce3ec);
    background-image: -moz-linear-gradient(top, #f0f3f6, #dce3ec);
    background-image: linear-gradient(to bottom, #f0f3f6, #dce3ec);
    border-color: #afb1b2;
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFF0F3F6', endColorstr='#FFDCE3EC')";
    *filter: progid:DXImageTransform.Microsoft.gradient(
        startColorstr='#FFF0F3F6',
        endColorstr='#FFDCE3EC'
      );
  }
  .social-count {
    position: relative;
    background-color: #fff;
  }
  .social-count:hover {
    color: #0366d6;
  }
  .octicon {
    position: relative;
    display: inline-block;
    fill: currentColor;
  }
  .btn,
  .social-count {
    height: 18px;
    padding: 0 5px;
    line-height: 18px;
  }
  .btn span,
  .social-count span {
    vertical-align: 1px;
  }
  .btn {
    font-size: 11px;
  }
  .social-count {
    margin-left: 5px;
    font-size: 10px;
  }
  .octicon {
    height: 14px;
    top: 2px;
  }
  .large .btn,
  .large .social-count {
    height: 26px;
    line-height: 26px;
  }
  .large .btn span,
  .large .social-count span {
    vertical-align: 0;
  }
  .large .btn {
    padding: 0 10px;
    font-size: 12px;
  }
  .large .social-count {
    padding: 0 7px;
    margin-left: 7px;
    font-size: 11px;
  }
  .large .octicon {
    height: 16px;
    top: 4px;
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
    _font-size: 0;
    _line-height: 0;
    border: 4px solid transparent;
  }
  .social-count b {
    margin-right: 0;
    border-right-color: #d1d2d3;
  }
  .social-count:focus b {
    border-right-color: #c8e1ff;
  }
  .social-count i {
    margin-right: -1.5px;
    border-right-color: #fff;
  }
  .social-count b,
  .social-count i {
    _border-top-color: red !important;
    _border-bottom-color: red !important;
    _border-left-color: red !important;
    _filter: chroma(color=red);
  }
  .large .social-count b,
  .large .social-count i {
    margin-top: -6px;
    border-width: 6px;
  }
  `],
  preserveWhitespaces: false,
})
export class NtkmeButtonComponent implements OnChanges {
  /** GitHub username that owns the repo */
  @Input() user: string;
  /** GitHub repository to pull the forks and watchers counts */
  @Input() repo: string;
  /** Type of button to show */
  @Input() type: 'watch' | 'fork' | 'follow' | 'star' = 'star';
  /** Show the optional watchers or forks count */
  @Input() count = false;
  /** Optional flag for using a larger button */
  @Input() size: 'none' | 'large' = 'none';
  text = '';
  mainButton: any = {
    'github-btn': true,
  };
  buttonHref: string;
  labelSuffix = ' on GitHub';
  counterHref: string;
  counter: number;
  counterLabel: string;
  loaded = false;
  constructor() { }

  ngOnChanges() {

  }
}
