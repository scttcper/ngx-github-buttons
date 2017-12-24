/* tslint:disable:max-line-length */
import {
  Component,
  Input,
  OnChanges,
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ButtonService } from '../button.service';

const svg = {
  follow: {
    path:
      'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z',
    height: '16',
    width: '16',
  },
  watch: {
    path:
      'M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z',
    height: '16',
    width: '16',
  },
  star: {
    path:
      'M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z',
    height: '16',
    width: '14',
  },
  fork: {
    path:
      'M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z',
    height: '16',
    width: '10',
  },
  issue: {
    path:
      'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z',
    height: '16',
    width: '14',
  },
  download: {
    path:
      'M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z',
    height: '16',
    width: '16',
  },
};

@Component({
  selector: 'ntkme-github-button',
  template: `
  <div [class.gh-large]="this.size === 'large'">
    <a [href]="buttonHref" class="gh-btn"
      [attr.aria-label]="text + ' on GitHub'">
      <svg version="1.1"
        [attr.width]="svg.width" [attr.height]="svg.height"
        [attr.viewBox]="'0 0 ' + svg.width + ' ' + svg.height"
        class="gh-octicon" aria-hidden="true">
        <path fill-rule="evenodd" [attr.d]="svg.path"></path>
      </svg>
      <span> {{ text }}</span>
    </a>
    <ntkme-counter *ngIf="count && loaded"
      [count]="counter"
      [large]="this.size === 'large'"
      [counterLabel]="counterLabel"
      [counterHref]="counterHref"
    ></ntkme-counter>
  </div>
  `,
  styles: [`
  a {
    color: #24292e;
    text-decoration: none;
    outline: 0;
  }
  .gh-btn {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
      Arial, sans-serif;
    user-select: none;
    display: inline-block;
    font-weight: 600;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid #d1d2d3;
    border-radius: 0.25em;
    background-color: #eff3f6;
    background-image: linear-gradient(to bottom, #fafbfc, #e4ebf0);
    background-repeat: repeat-x;
    background-size: 110% 110%;
    height: 20px;
    padding: 0 5px;
    line-height: 18px;
    font-size: 11px;
  }
  .gh-btn:focus {
    border-color: #c8e1ff;
  }
  .gh-btn:active {
    background-color: #e9ecef;
    background-image: none;
    border-color: #afb1b2;
    box-shadow: inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15);
  }
  .gh-btn:hover {
    background-color: #e6ebf1;
    background-image: linear-gradient(to bottom, #f0f3f6, #dce3ec);
    border-color: #afb1b2;
  }
  .gh-octicon {
    position: relative;
    display: inline-block;
    fill: currentColor;
    height: 14px;
    top: 2px;
  }
  .gh-btn span {
    vertical-align: 1px;
  }
  .gh-large .gh-btn {
    height: 26px;
    line-height: 26px;
    padding: 0 10px;
    font-size: 12px;
  }
  .gh-large .gh-btn span {
    vertical-align: 0;
  }
  .gh-large .gh-octicon {
    height: 16px;
    top: 4px;
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
  @Input() type: 'follow' | 'watch' | 'star' | 'fork' | 'issue' | 'download' = 'star';
  /** Show the optional watchers or forks count */
  @Input() count = false;
  /** Optional flag for using a larger button */
  @Input() size: 'none' | 'large' = 'none';
  /** Use the github logo as the icon */
  @Input() standardIcon = false;
  text = '';
  svg: any = {};
  buttonHref: string;
  counterHref: string;
  counter: number;
  counterLabel: string;
  countAttr: string;
  loaded = false;
  constructor(private buttonService: ButtonService) {}

  ngOnChanges() {
    const iconType = this.standardIcon ? 'follow' : this.type;
    this.svg = svg[iconType];
    switch (this.type) {
      case 'watch':
        this.text = 'Watch';
        this.countAttr = 'subscribers_count';
        this.counterLabel = ' watchers';
        this.buttonHref = 'https://github.com/' + this.user + '/' + this.repo + '/subscription';
        this.counterHref =
          'https://github.com/' + this.user + '/' + this.repo + '/watchers';
        break;
      case 'star':
        this.text = 'Star';
        this.countAttr = 'stargazers_count';
        this.counterLabel = ' stargazers';
        this.buttonHref = 'https://github.com/' + this.user + '/' + this.repo;
        this.counterHref =
          'https://github.com/' + this.user + '/' + this.repo + '/stargazers';
        break;
      case 'fork':
        this.text = 'Fork';
        this.countAttr = 'network_count';
        this.counterLabel = ' forks';
        this.buttonHref = 'https://github.com/' + this.user + '/' + this.repo + '/fork';
        this.counterHref = 'https://github.com/' + this.user + '/' + this.repo + '/network';
        break;
      case 'follow':
        this.text = 'Follow @' + this.user;
        this.countAttr = 'followers';
        this.counterLabel = ' followers';
        this.buttonHref = 'https://github.com/' + this.user;
        this.counterHref = 'https://github.com/' + this.user + '/followers';
        break;
      case 'issue':
        this.text = 'Issue';
        this.countAttr = 'open_issues';
        this.counterLabel = ' followers';
        this.buttonHref = 'https://github.com/' + this.user + '/' + this.repo + '/issues';
        this.counterHref = this.buttonHref;
        break;
      case 'download':
        this.text = 'Download';
        this.counterLabel = ' followers';
        this.countAttr = 'subscribers_count';
        this.buttonHref = 'https://github.com/' + this.user + '/' + this.repo + '/archive/master.zip';
        break;
    }
    if (this.count && this.user && this.type !== 'download') {
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
    sub.subscribe((d) => this.callback(d));
  }
  callback(data: any) {
    this.counter = data[this.countAttr];
    this.loaded = true;
  }
}
