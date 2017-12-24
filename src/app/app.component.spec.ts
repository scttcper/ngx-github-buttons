import { APP_BASE_HREF } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { MdoButtonModule } from '../lib/mdo/mdo.module';
import { NtkmeButtonModule } from '../lib/ntkme/ntkme.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        RouterModule.forRoot([]),
        MdoButtonModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
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
