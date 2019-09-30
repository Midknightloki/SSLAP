import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaHomeComponent } from './qa-home.component';

describe('QaHomeComponent', () => {
  let component: QaHomeComponent;
  let fixture: ComponentFixture<QaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
