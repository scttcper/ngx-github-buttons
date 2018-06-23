import { APP_BASE_HREF } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { of as ObservableOf } from 'rxjs';

import { ButtonService, NtkmeButtonModule } from '../lib/public_api';
import { AppComponent } from './app.component';

class FakeButtonService {
  repo(user: string, repo: string) {
    return ObservableOf({ stargazers_count: 0 });
  }
}


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        RouterModule.forRoot([]),
        NtkmeButtonModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        { provide: ButtonService, useClass: FakeButtonService },
      ]
    });
    TestBed.compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
