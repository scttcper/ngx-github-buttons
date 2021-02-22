/* tslint:disable:max-line-length */
import { Component, Input, OnChanges } from '@angular/core';

import { getRepo, getUser } from '../util';

const svg = {
  follow: {
    path:
      'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z',
    height: '16',
    width: '16',
  },
  watch: {
    path:
      'M1.67884 7.93165C2.09143 7.31094 2.9206 6.18152 4.0447 5.21477C5.17567 4.2421 6.52738 3.5 8.00001 3.5C9.47264 3.5 10.8244 4.2421 11.9553 5.21477C13.0794 6.18152 13.9086 7.31094 14.3212 7.93165C14.35 7.975 14.35 8.025 14.3212 8.06835C13.9086 8.68906 13.0794 9.81848 11.9553 10.7852C10.8244 11.7579 9.47264 12.5 8.00001 12.5C6.52738 12.5 5.17567 11.7579 4.0447 10.7852C2.9206 9.81848 2.09143 8.68906 1.67884 8.06835C1.65002 8.025 1.65002 7.975 1.67884 7.93165ZM8.00001 2C6.01865 2 4.32919 2.99167 3.06662 4.07751C1.79718 5.16926 0.880454 6.42307 0.429635 7.10129C0.0664231 7.64771 0.0664245 8.35229 0.429635 8.89871C0.880455 9.57693 1.79718 10.8307 3.06662 11.9225C4.32919 13.0083 6.01865 14 8.00001 14C9.98137 14 11.6708 13.0083 12.9334 11.9225C14.2028 10.8307 15.1196 9.57693 15.5704 8.89871C15.9336 8.35229 15.9336 7.64771 15.5704 7.10129C15.1196 6.42307 14.2028 5.16926 12.9334 4.07751C11.6708 2.99167 9.98137 2 8.00001 2ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z',
    height: '16',
    width: '16',
  },
  star: {
    path:
      'M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z',
    height: '16',
    width: '16',
  },
  fork: {
    path:
      'M5 3.25001C5 3.44892 4.92099 3.63969 4.78033 3.78034C4.63968 3.92099 4.44892 4.00001 4.25 4.00001C4.05109 4.00001 3.86033 3.92099 3.71967 3.78034C3.57902 3.63969 3.5 3.44892 3.5 3.25001C3.5 3.05109 3.57902 2.86033 3.71967 2.71968C3.86033 2.57902 4.05109 2.50001 4.25 2.50001C4.44892 2.50001 4.63968 2.57902 4.78033 2.71968C4.92099 2.86033 5 3.05109 5 3.25001ZM5 5.37201C5.50042 5.19509 5.92217 4.84696 6.19073 4.38915C6.45929 3.93134 6.55735 3.39333 6.4676 2.87021C6.37785 2.34709 6.10605 1.87253 5.70025 1.53043C5.29445 1.18832 4.78077 1.00069 4.25 1.00069C3.71924 1.00069 3.20556 1.18832 2.79976 1.53043C2.39396 1.87253 2.12216 2.34709 2.03241 2.87021C1.94265 3.39333 2.04072 3.93134 2.30928 4.38915C2.57784 4.84696 2.99959 5.19509 3.5 5.37201V6.25001C3.5 6.84674 3.73706 7.41904 4.15901 7.841C4.58097 8.26295 5.15327 8.50001 5.75 8.50001H7.25V10.628C6.74932 10.8049 6.3273 11.1532 6.05855 11.6112C5.78981 12.0692 5.69164 12.6075 5.78139 13.1309C5.87115 13.6543 6.14306 14.1291 6.54905 14.4714C6.95504 14.8136 7.46897 15.0014 8 15.0014C8.53104 15.0014 9.04497 14.8136 9.45096 14.4714C9.85695 14.1291 10.1289 13.6543 10.2186 13.1309C10.3084 12.6075 10.2102 12.0692 9.94146 11.6112C9.67271 11.1532 9.25069 10.8049 8.75 10.628V8.50001H10.25C10.8467 8.50001 11.419 8.26295 11.841 7.841C12.263 7.41904 12.5 6.84674 12.5 6.25001V5.37201C13.0004 5.19509 13.4222 4.84696 13.6907 4.38915C13.9593 3.93134 14.0574 3.39333 13.9676 2.87021C13.8778 2.34709 13.6061 1.87253 13.2002 1.53043C12.7944 1.18832 12.2808 1.00069 11.75 1.00069C11.2192 1.00069 10.7056 1.18832 10.2998 1.53043C9.89396 1.87253 9.62216 2.34709 9.53241 2.87021C9.44265 3.39333 9.54072 3.93134 9.80928 4.38915C10.0778 4.84696 10.4996 5.19509 11 5.37201V6.25001C11 6.44892 10.921 6.63969 10.7803 6.78034C10.6397 6.92099 10.4489 7.00001 10.25 7.00001H5.75C5.55109 7.00001 5.36033 6.92099 5.21967 6.78034C5.07902 6.63969 5 6.44892 5 6.25001V5.37201ZM8.75 12.75C8.75 12.9489 8.67099 13.1397 8.53033 13.2803C8.38968 13.421 8.19892 13.5 8 13.5C7.80109 13.5 7.61033 13.421 7.46967 13.2803C7.32902 13.1397 7.25 12.9489 7.25 12.75C7.25 12.5511 7.32902 12.3603 7.46967 12.2197C7.61033 12.079 7.80109 12 8 12C8.19892 12 8.38968 12.079 8.53033 12.2197C8.67099 12.3603 8.75 12.5511 8.75 12.75ZM11.75 4.00001C11.9489 4.00001 12.1397 3.92099 12.2803 3.78034C12.421 3.63969 12.5 3.44892 12.5 3.25001C12.5 3.05109 12.421 2.86033 12.2803 2.71968C12.1397 2.57902 11.9489 2.50001 11.75 2.50001C11.5511 2.50001 11.3603 2.57902 11.2197 2.71968C11.079 2.86033 11 3.05109 11 3.25001C11 3.44892 11.079 3.63969 11.2197 3.78034C11.3603 3.92099 11.5511 4.00001 11.75 4.00001Z',
    height: '16',
    width: '16',
  },
  issue: {
    path:
      'M8 1.5C6.27609 1.5 4.62279 2.18482 3.40381 3.40381C2.18482 4.62279 1.5 6.27609 1.5 8C1.5 9.72391 2.18482 11.3772 3.40381 12.5962C4.62279 13.8152 6.27609 14.5 8 14.5C9.72391 14.5 11.3772 13.8152 12.5962 12.5962C13.8152 11.3772 14.5 9.72391 14.5 8C14.5 6.27609 13.8152 4.62279 12.5962 3.40381C11.3772 2.18482 9.72391 1.5 8 1.5ZM0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8ZM9 11C9 11.2652 8.89464 11.5196 8.70711 11.7071C8.51957 11.8946 8.26522 12 8 12C7.73478 12 7.48043 11.8946 7.29289 11.7071C7.10536 11.5196 7 11.2652 7 11C7 10.7348 7.10536 10.4804 7.29289 10.2929C7.48043 10.1054 7.73478 10 8 10C8.26522 10 8.51957 10.1054 8.70711 10.2929C8.89464 10.4804 9 10.7348 9 11ZM8.75 4.75C8.75 4.55109 8.67098 4.36032 8.53033 4.21967C8.38968 4.07902 8.19891 4 8 4C7.80109 4 7.61032 4.07902 7.46967 4.21967C7.32902 4.36032 7.25 4.55109 7.25 4.75V8.25C7.25 8.44891 7.32902 8.63968 7.46967 8.78033C7.61032 8.92098 7.80109 9 8 9C8.19891 9 8.38968 8.92098 8.53033 8.78033C8.67098 8.63968 8.75 8.44891 8.75 8.25V4.75Z',
    height: '16',
    width: '16',
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
      [attr.aria-label]="text + ' on GitHub'" [target]="target">
      <svg version="1.1"
        [attr.width]="svg.width" [attr.height]="svg.height"
        [attr.viewBox]="'0 0 ' + svg.width + ' ' + svg.height"
        class="gh-octicon" aria-hidden="true">
        <path fill-rule="evenodd" [attr.d]="svg.path"></path>
      </svg>
      <span> {{ text }}</span>
    </a>
    <ng-template [ngIf]="count && counter !== undefined">
      <ntkme-counter
        [count]="counter"
        [large]="size === 'large'"
        [counterLabel]="counterLabel"
        [counterHref]="counterHref"
      ></ntkme-counter>
    </ng-template>
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
    background-image: linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);
    background-repeat: repeat-x;
    background-size: 110% 110%;
    height: 20px;
    padding: 0 5px;
    line-height: 18px;
    font-size: 11px;
    white-space: nowrap;
  }
  .gh-btn:not(:last-child) {
    border-radius: .25em 0 0 .25em;
  }
  .gh-btn:focus {
    border-color: rgba(27,31,35,.2);
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
    background-position: -0.5em;
    border-color: #9fa4a9;
    border-color: rgba(27,31,35,.35);
  }
  .gh-octicon {
    position: relative;
    display: inline-block;
    fill: currentColor;
    height: 14px;
    top: 2px;
    vertical-align: initial;
  }
  .gh-btn span {
    vertical-align: 1px;
  }
  .gh-large .gh-btn {
    height: 28px;
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
})
export class NtkmeButtonComponent implements OnChanges {
  /** GitHub username that owns the repo */
  @Input() user!: string;
  /** GitHub repository to pull the forks and watchers counts */
  @Input() repo!: string;
  /** Type of button to show */
  @Input() type: 'follow' | 'watch' | 'star' | 'fork' | 'issue' | 'download' = 'star';
  /** Show the optional watchers or forks count */
  @Input() count = false;
  /** Optional flag for using a larger button */
  @Input() size: 'none' | 'large' = 'none';
  /** Use the github logo as the icon */
  @Input() standardIcon = false;
  /** Specifies where to open the linked github URL. */
  @Input() target:
    '_blank'  // Opens the linked document in a new window or tab
  | '_self' // Opens the linked document in the same frame as it was clicked (this is default)
  | '_parent' //Opens the linked document in the parent frame
  | '_top'  // Opens the linked document in the full body of the window
  = '_self'
  text = '';
  svg: any = {};
  buttonHref = '';
  counterHref = '';
  counter?: number;
  counterLabel = '';
  countAttr = '';

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
    let sub: Promise<any>;
    if (this.type === 'follow') {
      sub = getUser(this.user);
    } else {
      if (!this.repo) {
        return;
      }
      sub = getRepo(this.user, this.repo);
    }
    sub.then((d) => this.callback(d));
  }
  callback(data: any) {
    this.counter = data[this.countAttr ?? ''];
  }
}
