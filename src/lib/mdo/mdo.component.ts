/* tslint:disable:max-line-length */
import { Component, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ButtonService } from '../button.service';

@Component({
  selector: 'mdo-github-button',
  template: `
  <div [ngClass]="mainButton">
    <a class="gh-btn" [href]="buttonHref" target="_blank" [attr.aria-label]="text + labelSuffix">
      <span class="gh-ico" aria-hidden="true"></span>
      <span class="gh-text">{{ text }}</span>
    </a>
    <a class="gh-count" *ngIf="count && loaded"
      [href]="counterHref" target="_blank"
      [attr.aria-label]="(counter | number) + counterLabel + labelSuffix"
      >
      {{ counter | number }}
    </a>
  </div>
  `,
  styles: [
    `
  .github-btn {
    overflow: hidden;
    display: inline-block;
    font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    height: 20px;
  }
  .gh-btn,
  .gh-count,
  .gh-ico {
    float: left;
  }
  .gh-btn,
  .gh-count {
    padding: 2px 5px 2px 4px;
    color: #333;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 3px;
  }
  .gh-btn {
    background-color: #eee;
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fcfcfc), color-stop(100%, #eee));
    background-image: -webkit-linear-gradient(top, #fcfcfc 0, #eee 100%);
    background-image: -moz-linear-gradient(top, #fcfcfc 0, #eee 100%);
    background-image: -ms-linear-gradient(top, #fcfcfc 0, #eee 100%);
    background-image: -o-linear-gradient(top, #fcfcfc 0, #eee 100%);
    background-image: linear-gradient(to bottom, #fcfcfc 0, #eee 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fcfcfc', endColorstr='#eeeeee', GradientType=0);
    background-repeat: no-repeat;
    border: 1px solid #d5d5d5;
  }
  .gh-btn:hover,
  .gh-btn:focus {
    text-decoration: none;
    background-color: #ddd;
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #eee), color-stop(100%, #ddd));
    background-image: -webkit-linear-gradient(top, #eee 0, #ddd 100%);
    background-image: -moz-linear-gradient(top, #eee 0, #ddd 100%);
    background-image: -ms-linear-gradient(top, #eee 0, #ddd 100%);
    background-image: -o-linear-gradient(top, #eee 0, #ddd 100%);
    background-image: linear-gradient(to bottom, #eee 0, #ddd 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#dddddd', GradientType=0);
    border-color: #ccc;
  }
  .gh-btn:active {
    background-image: none;
    background-color: #dcdcdc;
    border-color: #b5b5b5;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);
  }
  .gh-ico {
    width: 14px;
    height: 14px;
    margin-right: 4px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4=');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .gh-count {
    position: relative;
    display: block;
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
  .github-btn-large {
    height: 30px;
  }
  .github-btn-large .gh-btn,
  .github-btn-large .gh-count {
    padding: 3px 10px 3px 8px;
    font-size: 16px;
    line-height: 22px;
    border-radius: 4px;
  }
  .github-btn-large .gh-ico {
    width: 20px;
    height: 20px;
  }
  .github-btn-large .gh-count {
    margin-left: 6px;
  }
  .github-btn-large .gh-count:before {
    left: -5px;
    margin-top: -6px;
    border-width: 6px 6px 6px 0;
  }
  .github-btn-large .gh-count:after {
    left: -6px;
    margin-top: -7px;
    border-width: 7px 7px 7px 0;
  }
  `,
  ],
  preserveWhitespaces: false,
})
export class MdoGithubButtonComponent implements OnChanges {
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
  countAttr: string;
  loaded = false;
  constructor(private buttonService: ButtonService) {}

  ngOnChanges() {
    this.buttonHref = 'https://github.com/' + this.user + '/' + this.repo + '/';
    this.mainButton['github-btn-large'] = this.size === 'large';
    // Add the class, change the text label, set count link href
    switch (this.type) {
      case 'watch':
        this.mainButton['github-watchers'] = true;
        this.text = 'Watch';
        this.countAttr = 'subscribers_count';
        this.counterHref =
          'https://github.com/' + this.user + '/' + this.repo + '/watchers';
        break;
      case 'star':
        this.mainButton['github-stargazers'] = true;
        this.text = 'Star';
        this.counterLabel = ' stargazers';
        this.countAttr = 'stargazers_count';
        this.counterLabel = ' watchers';
        this.counterHref =
          'https://github.com/' + this.user + '/' + this.repo + '/stargazers';
        break;
      case 'fork':
        this.mainButton['github-forks'] = true;
        this.text = 'Fork';
        this.counterLabel = ' forks';
        this.countAttr = 'network_count';
        this.buttonHref = 'https://github.com/' + this.user + '/' + this.repo + '/fork';
        this.counterHref = 'https://github.com/' + this.user + '/' + this.repo + '/network';
        break;
      case 'follow':
        this.mainButton['github-me'] = true;
        this.text = 'Follow @' + this.user;
        this.counterLabel = ' followers';
        this.countAttr = 'followers';
        this.buttonHref = 'https://github.com/' + this.user;
        this.counterHref = 'https://github.com/' + this.user + '/followers';
        break;
    }
    if (this.count && this.user) {
      this.fetch();
    }
  }
  fetch() {
    this.loaded = false;
    let sub: Observable<any>;
    if (this.type === 'follow') {
      sub = this.buttonService.user(this.user);
    } else {
      if (!this.repo) {
        return;
      }
      sub = this.buttonService.repo(this.user, this.repo);
    }
    sub.subscribe(
      (d) => this.callback(d),
      (e) => {},
    );
  }
  callback(data: any) {
    this.counter = data[this.countAttr];
    this.loaded = true;
  }
}
