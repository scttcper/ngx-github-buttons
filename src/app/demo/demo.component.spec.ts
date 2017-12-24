import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { MdoButtonModule } from '../../lib/mdo/mdo.module';
import { NtkmeButtonModule } from '../../lib/ntkme/ntkme.module';
import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DemoComponent],
        imports: [
          CommonModule,
          FormsModule,
          MdoButtonModule,
          NtkmeButtonModule,
        ],
      });
      TestBed.compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
