import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcHomeComponent } from './drc-home.component';

describe('DrcHomeComponent', () => {
  let component: DrcHomeComponent;
  let fixture: ComponentFixture<DrcHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrcHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
