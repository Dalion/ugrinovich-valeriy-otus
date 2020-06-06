import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoLearnComponent } from './go-learn.component';

describe('GoLearnComponent', () => {
  let component: GoLearnComponent;
  let fixture: ComponentFixture<GoLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
