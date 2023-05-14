import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDataBindComponent } from './two-way-data-bind.component';

describe('TwoWayDataBindComponent', () => {
  let component: TwoWayDataBindComponent;
  let fixture: ComponentFixture<TwoWayDataBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayDataBindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayDataBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
